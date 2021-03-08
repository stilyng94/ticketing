import { Job, Worker } from "bullmq";
import { ExpirationCompletePublisher } from "./events/publishers/expiration-complete";
import { natsWrapper } from "./nats-wrapper";

const expirationWorker = new Worker(
  "expiration::worker",
  async (job) => {
    switch (job.name) {
      case "expiration::job":
        return expirationCompleteHandler(job);
      default:
        return;
    }
  },
  { connection: { host: process.env.REDIS_HOST } }
);

const expirationCompleteHandler = async (job: Job<any, any, string>) => {
  await new ExpirationCompletePublisher(natsWrapper.client).publish(
    job.data.orderId
  );
  return;
};
