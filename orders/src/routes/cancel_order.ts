import express, { Request, Response } from "express";
import {
  currentUserWare,
  NotAuthorizedError,
  NotFoundError,
  validateRequestWare,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { Order } from "../models/order_model";
import { param } from "express-validator";
import { natsWrapper } from "../nats-wrapper";
import { OrderCancelledPublisher } from "../events/publishers/order-cancelled-publisher";

const cancelOrderRouter = express.Router();

cancelOrderRouter.patch(
  "/api/v1/orders/:orderId",
  currentUserWare,
  [param("orderId").notEmpty().isMongoId()],
  validateRequestWare,
  async (req: Request, res: Response) => {
    const order = await Order.findOne({
      id: req.params.orderId,
    })
      .populate("ticket")
      .exec();
    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.userId) {
      throw new NotAuthorizedError();
    }
    order.status = OrderStatus.Cancelled;
    await order.save();

    //!Publish
    //!Publish to listeners
    new OrderCancelledPublisher(natsWrapper.client).publish({
      id: order.id,
      version: order.version,
      ticket: { id: order.ticket.id },
    });

    return res.status(200).json(order);
  }
);

export { cancelOrderRouter };
