import {
  BadRequestError,
  BaseListener,
  IExpirationCompleteEvent,
  NATSubjects,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order_model";
import { OrderCancelledPublisher } from "../publishers/order-cancelled-publisher";
import { queueGroupName } from "./queue-group-name";

export class ExpirationCompleteListener extends BaseListener<IExpirationCompleteEvent> {
  subject: NATSubjects.ExpirationCompleted = NATSubjects.ExpirationCompleted;
  queueGroupName: string = queueGroupName;
  async onMessage(parsedData: any, msg: Message): Promise<void> {
    const order = await Order.findById(parsedData.orderId)
      .populate("ticket", "id")
      .exec();
    if (!order) {
      throw new BadRequestError("Order not found");
    }

    if (order.status === OrderStatus.Complete) {
      return msg.ack();
    }

    order.set({ status: OrderStatus.Cancelled });
    await order.save();

    await new OrderCancelledPublisher(this.client).publish({
      id: order.id!,
      version: order.version,
      ticket: { id: order.ticket.id },
    });
    return msg.ack();
  }
}
