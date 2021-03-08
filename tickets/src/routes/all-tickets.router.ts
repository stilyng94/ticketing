import express from "express";
import { Ticket } from "../models/ticket";

const allTicketsRouter = express.Router();

allTicketsRouter.get("/api/tickets", async (req, res) => {
  const tickets = await Ticket.find({ orderId: undefined }).exec();
  return res.status(200).json({ tickets });
});

export default allTicketsRouter;
