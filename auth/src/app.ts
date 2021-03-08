import express from "express";
import "express-async-errors";

import cookieParser from "cookie-parser";
import { signoutRouter } from "./routes/signout";
import { siginRouter } from "./routes/sigin";
import { signupRouter } from "./routes/signup";
import { currentUserRouter } from "./routes/current-user";
import { errorHandler } from "@lotus_yng_dev_tickets/common";
import { NotFoundError } from "@lotus_yng_dev_tickets/common";

const app = express();
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(cookieParser(""));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use(signoutRouter);
app.use(signupRouter);
app.use(siginRouter);
app.use(currentUserRouter);

app.all("*", (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
