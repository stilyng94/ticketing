import express from "express";
import "express-async-errors";

import cookieParser from "cookie-parser";

import { errorHandler } from "@lotus_yng_dev_tickets/common";
import { NotFoundError } from "@lotus_yng_dev_tickets/common";
import { newChargeRouter } from "./routes/new_charge";

const app = express();
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(cookieParser(""));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use(newChargeRouter);

app.all("*", (_, __) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
