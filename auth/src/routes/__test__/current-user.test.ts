import request from "supertest";
import { app } from "../../app";

it("returns details of current user", async () => {
  const cookie = await global.signin();
  console.log(cookie);
  const resp2 = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .expect(200);

  console.log("user: ", resp2.body);
});

it("throws error when not signin", async () => {
  const resp2 = await request(app).get("/api/users/currentuser").expect(401);

  console.log("user: ", resp2.body);
});
