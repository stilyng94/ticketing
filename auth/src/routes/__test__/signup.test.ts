import request from "supertest";
import { app } from "../../app";

it("returns 201", async () => {
  process.env.JWT_KEY = "hurrayy";
  return request(app)
    .post("/api/users/signup")
    .send({ email: "mail@mail.com", password: "passworddd" })
    .expect(201);
});

it("Duplicate email error", async () => {
  process.env.JWT_KEY = "hurrayy";
  await request(app)
    .post("/api/users/signup")
    .send({ email: "mail1@mail.com", password: "passworddd" })
    .expect(201);
  return request(app)
    .post("/api/users/signup")
    .send({ email: "mail1@mail.com", password: "passworddd" })
    .expect(400);
});
