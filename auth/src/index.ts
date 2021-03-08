import mongoose from "mongoose";
import { app } from "./app";
import { DatabaseConnectionError } from "@lotus_yng_dev_tickets/common";

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    return app.listen(3000, () => {
      console.log("on port 3000");
    });
  } catch (error) {
    throw new DatabaseConnectionError();
  }
};

main();

//@types/jest @types/supertest
