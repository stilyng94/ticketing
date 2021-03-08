import {
  BaseListener,
  IOrderCreatedEvent,
  NATSubjects,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order-model";
import { queueGroupName } from "./queue-group-name";

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
    const order = Order.build({
      id: parsedData.id,
      status: parsedData.status,
      price: parsedData.ticket.price,
      userId: parsedData.userId,
      version: parsedData.version,
    });

    await order.save();
    return msg.ack();
  }
}
