import express from "express";
import "express-async-errors";

import cookieParser from "cookie-parser";

import { errorHandler } from "@lotus_yng_dev_tickets/common";
import { NotFoundError } from "@lotus_yng_dev_tickets/common";

import createTicketRouter from "./routes/create-ticket.router";
import allTicketsRouter from "./routes/all-tickets.router";
import showTicketRouter from "./routes/show-ticket.router";
import updateTicketRouter from "./routes/update-ticket.router";

const app = express();
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(cookieParser(""));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(allTicketsRouter);
app.use(updateTicketRouter);

app.all("*", (_, __) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
