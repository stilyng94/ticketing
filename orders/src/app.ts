import express from "express";
import "express-async-errors";

import cookieParser from "cookie-parser";

import { errorHandler } from "@lotus_yng_dev_tickets/common";
import { NotFoundError } from "@lotus_yng_dev_tickets/common";
import { newOrderRouter } from "./routes/new_order";
import { ordersRouter } from "./routes/orders";
import { cancelOrderRouter } from "./routes/cancel_order";
import { singleOrderRouter } from "./routes/single_order";

const app = express();
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(cookieParser(""));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use(ordersRouter);
app.use(newOrderRouter);
app.use(cancelOrderRouter);
app.use(singleOrderRouter);

app.all("*", (_, __) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
