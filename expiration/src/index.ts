import { DatabaseConnectionError } from "@lotus_yng_dev_tickets/common";
import { OrderCreatedListener } from "./events/listeners/order-created-listener";
import { natsWrapper } from "./nats-wrapper";

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
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID!,
      process.env.NATS_CLIENT_ID!,
      process.env.NATS_URL!
    );
    new OrderCreatedListener(natsWrapper.client).listen();
    natsCloseHandler();

    return;
  } catch (error) {
    console.error(error);
    throw new DatabaseConnectionError();
  }
};

main();
