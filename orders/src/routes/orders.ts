import express, { Request, Response } from "express";
import { currentUserWare } from "@lotus_yng_dev_tickets/common";
import { Order } from "../models/order_model";

const ordersRouter = express.Router();

ordersRouter.get(
  "/api/v1/orders",
  currentUserWare,
  async (req: Request, res: Response) => {
    const orders = await Order.find({ userId: req.currentUser!.userId })
      .populate("ticket")
      .exec();
    return res.status(200).json(orders);
  }
);

export { ordersRouter };
