import express, { Request, Response } from "express";
import { Ticket } from "../models/ticket";
import { NotFoundError } from "@lotus_yng_dev_tickets/common";
import { param } from "express-validator";

const showTicketRouter = express.Router();

showTicketRouter.get(
  "/api/tickets/:id",
  param("id").isMongoId().withMessage("please enter a valid id"),
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id).exec();
    if (!ticket) {
      throw new NotFoundError();
    }
    return res.status(200).json({ ticket });
  }
);

export default showTicketRouter;
