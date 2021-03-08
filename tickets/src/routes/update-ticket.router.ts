import express, { Request, Response } from "express";
import { Ticket } from "../models/ticket";
import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
} from "@lotus_yng_dev_tickets/common";
import {
  validateRequestWare,
  currentUserWare,
} from "@lotus_yng_dev_tickets/common";
import { body } from "express-validator";
import { natsWrapper } from "../nats-wrapper";
import { TicketUpdatedPublisher } from "../events/publishers/ticket-updated-publisher";

const updateTicketRouter = express.Router();

updateTicketRouter.put(
  "/api/tickets/:id",
  currentUserWare,
  [body("title").notEmpty(), body("price").isCurrency()],
  validateRequestWare,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id).exec();
    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.orderId) {
      throw new BadRequestError("Cannot edit a reserved ticket.");
    }
    if (ticket.userId !== req.currentUser?.userId) {
      throw new NotAuthorizedError();
    }
    const { title, price } = req.body;

    ticket.title = title ?? ticket.title;
    ticket.price = price ?? ticket.price;

    await ticket.save();
    await new TicketUpdatedPublisher(natsWrapper.client).publish({
      id: ticket.id!,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      version: ticket.version,
    });
    return res.status(200).json({ ticket });
  }
);
export default updateTicketRouter;
