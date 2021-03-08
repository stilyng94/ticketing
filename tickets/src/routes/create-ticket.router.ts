import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";
import {
  currentUserWare,
  validateRequestWare,
} from "@lotus_yng_dev_tickets/common";
import { TicketCreatedPublisher } from "../events/publishers/ticket-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const createTicketRouter = express.Router();

createTicketRouter.post(
  "/api/tickets",
  currentUserWare,
  [body("title").notEmpty(), body("price").isCurrency()],
  validateRequestWare,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.userId,
    });
    await ticket.save();
    await new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id!,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      version: ticket.version,
    });
    return res.status(201).json({ ticket });
  }
);

export default createTicketRouter;
