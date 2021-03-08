import { Queue } from "bullmq";

interface Payload {
  orderId: string;
}

export const expirationQueue = new Queue<Payload>("expiration::Queue", {
  connection: { host: process.env.REDIS_HOST },
});
