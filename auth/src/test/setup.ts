import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";

declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>;
    }
  }
}

let mongo: any;
beforeAll(async () => {
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

global.signin = async () => {
  process.env.JWT_KEY = "hurrayy";
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "mail1@mail.com", password: "passworddd" })
    .expect(201);
  const cookie = response.get("Set-Cookie");
  return cookie;
};
