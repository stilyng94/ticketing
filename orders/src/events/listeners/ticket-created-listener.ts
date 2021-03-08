import { Message } from "node-nats-streaming";
import {
  NATSubjects,
  BaseListener,
  ITicketCreatedEvent,
} from "@lotus_yng_dev_tickets/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends BaseListener<ITicketCreatedEvent> {
  subject: NATSubjects.TicketCreated = NATSubjects.TicketCreated;
  queueGroupName: string = queueGroupName;
  async onMessage(
    parsedData: { id: string; title: string; price: number; userId: string },
    msg: Message
  ): Promise<void> {
    const ticket = Ticket.build({
      price: parsedData.price,
      title: parsedData.title,
      id: parsedData.id,
    });
    await ticket.save();
    return msg.ack();
  }
}
