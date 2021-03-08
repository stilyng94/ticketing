import {
  BaseListener,
  IOrderCreatedEvent,
  NATSubjects,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";

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
    const delay =
      new Date(parsedData.expiresAt).getTime() - new Date().getTime();
    await expirationQueue.add(
      "expiration::job",
      { orderId: parsedData.id },
      {
        delay,
      }
    );
    return msg.ack();
  }
}
