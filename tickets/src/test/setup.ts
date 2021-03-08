import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface Global {
      signin(): string[];
    }
  }
}
jest.mock("../nats-wrapper.ts");

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "hurray";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  return;
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
  return;
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
  return;
});

global.signin = () => {
  const userJwt = jwt.sign(
    { userId: "12345", email: "mail@mail.com" },
    process.env.JWT_KEY!,
    {
      expiresIn: "15m",
    }
  );
  return [`jwt=${userJwt}`];
};
