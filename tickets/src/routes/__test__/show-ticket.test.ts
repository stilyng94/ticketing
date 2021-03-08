import request from "supertest";
import { app } from "../../app";

it("Should return 404 if ticket not found", async () => {
  await request(app).get("/api/tickets/id").send({}).expect(404);
});
it("Return ticket if id valid", async () => {
  const resp = await request(app)
    .post("/api/tickets")
    .set({ Cookie: global.signin() })
    .send({ title: "hello ticket", price: 10.99 });

  await request(app).get(`api/tickets/${resp.body.id}`).expect(200);
});
