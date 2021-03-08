import mongoose from "mongoose";
import { app } from "./app";
import { DatabaseConnectionError } from "@lotus_yng_dev_tickets/common/build/errors";
import { natsWrapper } from "./nats-wrapper";
import { TicketCreatedListener } from "./events/listeners/ticket-created-listener";
import { TicketUpdatedListener } from "./events/listeners/ticket-updated-listener";
import { PaymentCreatedListener } from "./events/listeners/payment-created-listener";

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

    new TicketCreatedListener(natsWrapper.client).listen();
    new TicketUpdatedListener(natsWrapper.client).listen();
    new PaymentCreatedListener(natsWrapper.client).listen();

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
