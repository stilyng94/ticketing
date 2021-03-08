import mongoose from "mongoose";
import { app } from "./app";
import { DatabaseConnectionError } from "@lotus_yng_dev_tickets/common";
import { natsWrapper } from "./nats-wrapper";
import { OrderCancelledListener } from "./events/listeners/order-cancelled-listener";
import { OrderCreatedListener } from "./events/listeners/order-created-listener";

const natsCloseHandler = () => {
  natsWrapper.client.on("close", () => {
    console.log("Nats Connection closed");
    process.exit(0);
  });
  process.on("SIGTERM", () => natsWrapper.client.close());
  process.on("SIGINT", () => natsWrapper.client.close());
};

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID!,
      process.env.NATS_CLIENT_ID!,
      process.env.NATS_URL!
    );

    new OrderCreatedListener(natsWrapper.client).listen();
    new OrderCancelledListener(natsWrapper.client).listen();

    natsCloseHandler();

    return app.listen(3000, () => {
      console.log("on port 3000");
    });
  } catch (error) {
    console.error(error);
    throw new DatabaseConnectionError();
  }
};

main();
