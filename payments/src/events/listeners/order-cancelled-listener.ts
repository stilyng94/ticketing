import {
  BaseListener,
  IOrderCancelledEvent,
  NATSubjects,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order-model";
import { queueGroupName } from "./queue-group-name";

export class OrderCancelledListener extends BaseListener<IOrderCancelledEvent> {
  subject: NATSubjects.OrderCancelled = NATSubjects.OrderCancelled;
  queueGroupName: string = queueGroupName;

  async onMessage(
    parsedData: { id: string; version: number; ticket: { id: string } },
    msg: Message
  ): Promise<void> {
    const order = await Order.findOne({
      _id: parsedData.id,
      version: parsedData.version - 1,
    }).exec();

    if (!order) {
      throw new Error("Order not found");
    }

    order.set({ status: OrderStatus.Cancelled });
    await order.save();
    return msg.ack();
  }
}
