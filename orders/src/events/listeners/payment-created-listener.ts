import { Message } from "node-nats-streaming";
import {
  NATSubjects,
  BaseListener,
  IPaymentCreatedEvent,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order_model";

export class PaymentCreatedListener extends BaseListener<IPaymentCreatedEvent> {
  subject: NATSubjects.PaymentCreated = NATSubjects.PaymentCreated;
  queueGroupName: string = queueGroupName;
  async onMessage(
    parsedData: {
      id: string;
      orderId: string;
      stripeId: string;
      version: number;
    },
    msg: Message
  ): Promise<void> {
    const existOrder = await Order.findById(parsedData.orderId).exec();
    if (!existOrder) {
      throw new Error("Order not found");
    }
    existOrder.set({ status: OrderStatus.Complete });
    await existOrder.save();
    return msg.ack();
  }
}
