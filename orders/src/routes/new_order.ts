import express, { Request, Response } from "express";
import {
  currentUserWare,
  NotFoundError,
  BadRequestError,
  validateRequestWare,
  OrderStatus,
} from "@lotus_yng_dev_tickets/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";
import { Order } from "../models/order_model";
import { natsWrapper } from "../nats-wrapper";
import { OrderCreatedPublisher } from "../events/publishers/order-created-publisher";

const newOrderRouter = express.Router();

newOrderRouter.post(
  "/api/v1/orders",
  currentUserWare,
  [body("ticketId").notEmpty().isMongoId()],
  validateRequestWare,
  async (req: Request, res: Response) => {
    const { ticketId } = req.body;
    const existTicket = await Ticket.findById(ticketId).exec();
    if (!existTicket) {
      throw new NotFoundError();
    }
    const isReserved = await existTicket.isReserved();
    if (isReserved) {
      throw new BadRequestError("Ticket is already reserved");
    }
    const order = Order.build({
      ticket: existTicket,
      userId: req.currentUser!.userId,
    });
    await order.save();

    //!Publish to listeners
    new OrderCreatedPublisher(natsWrapper.client).publish({
      id: order.id,
      status: order.status,
      userId: order.userId,
      expiresAt: order.expiresAt,
      version: order.version,
      ticket: { id: ticketId, price: existTicket.price },
    });

    return res.status(201).json(order);
  }
);

export { newOrderRouter };
