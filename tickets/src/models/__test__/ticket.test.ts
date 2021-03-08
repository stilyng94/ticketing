import { Ticket } from "../ticket";

it("implements optimistic concurrency control", async (done) => {
  const ticket = Ticket.build({
    title: "concert",
    price: 10.99,
    userId: "123",
  });

  await ticket.save();

  const firstInstance = await Ticket.findById(ticket.id).exec();
  const secondInstance = await Ticket.findById(ticket.id).exec();

  firstInstance!.set("price", 10);
  secondInstance!.set("price", 19);

  await firstInstance!.save();

  try {
    await secondInstance!.save();
  } catch (error) {
    return done();
  }
  throw new Error("Should not reach here");
});

it("increments version number on multiple saves.", async (done) => {
  const ticket = Ticket.build({
    title: "concert",
    price: 10.99,
    userId: "123",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
