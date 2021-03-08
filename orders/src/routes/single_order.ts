import express, { Request, Response } from "express";
import {
  currentUserWare,
  NotAuthorizedError,
  NotFoundError,
  validateRequestWare,
} from "@lotus_yng_dev_tickets/common";
import { Order } from "../models/order_model";
import { param } from "express-validator";

const singleOrderRouter = express.Router();

singleOrderRouter.get(
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
    return res.status(200).json(order);
  }
);

export { singleOrderRouter };
