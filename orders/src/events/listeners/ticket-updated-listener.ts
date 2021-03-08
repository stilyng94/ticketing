import { Message } from "node-nats-streaming";
import {
  NATSubjects,
  BaseListener,
  ITicketUpdatedEvent,
} from "@lotus_yng_dev_tickets/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketUpdatedListener extends BaseListener<ITicketUpdatedEvent> {
  subject: NATSubjects.TicketUpdated = NATSubjects.TicketUpdated;
  queueGroupName: string = queueGroupName;
  async onMessage(
    parsedData: {
      id: string;
      title: string;
      price: number;
      userId: string;
      version: number;
    },
    msg: Message
  ): Promise<void> {
    const existTicket = await Ticket.findByEvent({ ...parsedData });
    if (!existTicket) {
      throw new Error("Ticket not found");
    }
    const { title, price } = parsedData;
    existTicket.set({ title, price });

    await existTicket.save();
    return msg.ack();
  }
}
