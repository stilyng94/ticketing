import express from "express";
import { BadRequestError } from "@lotus_yng_dev_tickets/common";
import { currentUserWare } from "@lotus_yng_dev_tickets/common";
import { User } from "../models/user";

const router = express.Router();

router.get("/api/users/currentuser", currentUserWare, async (req, res) => {
  const payload = req.currentUser;
  const currentUser = await User.findById(payload!.userId!);
  if (!currentUser) {
    throw new BadRequestError("User not found");
  }
  return res.status(200).json(currentUser);
});

export { router as currentUserRouter };
