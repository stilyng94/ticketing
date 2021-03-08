import { app } from "../../app";
import request from "supertest";

const createTickets = async () => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "t1",
      price: 10.99,
    })
    .expect(201);
  return;
};

it("returns all tickets in db", async () => {
  await createTickets();
  await createTickets();
  await createTickets();

  const resp = await request(app).get("/api/tickets").expect(200);
  expect(resp.body.length === 3);
});
