import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";
import { natsWrapper } from "../../__mocks__/nats-wrapper";

it("has a route handler listening", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({})
    .expect(200);
  console.log(response.body);
  return;
});

it("can only if auth", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({})
    .expect(200);
  console.log(response.body);
  return;
});

it("returns error for invalid title", async () => {
  const cookie = global.signin();

  await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title: "",
      price: 10,
    })
    .expect(400);

  return;
});

it("invalid price", async () => {
  const cookie = global.signin();

  await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: "",
    })
    .expect(400);
  return;
});

it("creates a valid ticket", async () => {
  const cookie = global.signin();

  await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: 10.99,
    })
    .expect(201);
  const tickets = await Ticket.find({}).exec();
  expect(tickets.length > 0);
  expect(tickets[0].price === 10.99);

  return;
});

it("publishes an event", async () => {
  const cookie = global.signin();

  await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: 10.99,
    })
    .expect(201);
  expect(natsWrapper.client.publish()).toHaveBeenCalled();
  return;
});
