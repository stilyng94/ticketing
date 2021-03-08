import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "@lotus_yng_dev_tickets/common";
import jwt from "jsonwebtoken";
import { validateRequestWare } from "@lotus_yng_dev_tickets/common";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").notEmpty().trim().isLength({ min: 4, max: 20 }),
    validateRequestWare,
  ],
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email }).exec();
    if (existUser) {
      throw new BadRequestError("Email in use");
    }
    let user = User.build({ email, password });
    user = await user.save();

    const userJwt = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_KEY!,
      {
        expiresIn: "15m",
      }
    );
    res.cookie("jwt", userJwt, {
      secure: process.env.NODE_ENV === "development",
      httpOnly: true,
    });
    return res.status(201).json({ user });
  }
);

export { router as signupRouter };
