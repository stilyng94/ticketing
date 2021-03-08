import {
  BaseListener,
  NATSubjects,
  IOrderCreatedEvent,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";

export class OrderCreatedListener extends BaseListener<IOrderCreatedEvent> {
  subject: NATSubjects.OrderCreated = NATSubjects.OrderCreated;
  queueGroupName: string = queueGroupName;
  async onMessage(
    parsedData: {
      id: string;
      status: OrderStatus;
      expiresAt: string;
      version: number;
      userId: string;
      ticket: { id: string; price: number };
    },
    msg: Message
  ): Promise<void> {
    const existTicket = await Ticket.findById(parsedData.ticket.id).exec();
    if (!existTicket) {
      throw new Error("Ticket not found");
    }
    existTicket.set({ orderId: parsedData.id });
    await existTicket.save();

    await new TicketUpdatedPublisher(this.client).publish({
      price: existTicket.price,
      title: existTicket.title,
      userId: existTicket.userId,
      orderId: existTicket.orderId,
      version: existTicket.version,
      id: existTicket.id!,
    });
    return msg.ack();
  }
}
