import {
  BaseListener,
  NATSubjects,
  IOrderCreatedCancelledEvent,
} from "@lotus_yng_dev_tickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";

export class OrderCancelledListener extends BaseListener<IOrderCreatedCancelledEvent> {
  subject: NATSubjects.OrderCancelled = NATSubjects.OrderCancelled;
  queueGroupName: string = queueGroupName;
  async onMessage(
    parsedData: {
      id: string;
      version: number;
      ticket: {
        id: string;
      };
    },
    msg: Message
  ): Promise<void> {
    const existTicket = await Ticket.findById(parsedData.ticket.id).exec();
    if (!existTicket) {
      throw new Error("Ticket not found");
    }
    existTicket.set({ orderId: undefined });
    await existTicket.save();
    await new TicketUpdatedPublisher(this.client).publish({
      id: existTicket.id!,
      userId: existTicket.userId,
      price: existTicket.price,
      title: existTicket.title,
      orderId: existTicket.orderId,
      version: existTicket.version,
    });
    return msg.ack();
  }
}
