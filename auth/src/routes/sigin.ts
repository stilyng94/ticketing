import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "@lotus_yng_dev_tickets/common";
import jwt from "jsonwebtoken";
import { PasswordManager } from "../utils/password";
import { validateRequestWare } from "@lotus_yng_dev_tickets/common";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").trim().notEmpty(),
  ],
  validateRequestWare,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email }).exec();
    if (!existUser) {
      throw new BadRequestError("Invalid login credentials");
    }

    const passwordMatch = await PasswordManager.compare(
      existUser.password,
      password
    );
    if (!passwordMatch) {
      throw new BadRequestError("Invalid login credentials");
    }

    const userJwt = jwt.sign(
      { userId: existUser.id, email: existUser.email },
      process.env.JWT_KEY!,
      {
        expiresIn: "15m",
      }
    );
    res.cookie("jwt", userJwt, {
      secure: process.env.NODE_ENV === "development",
      httpOnly: true,
    });
    return res.status(200).json(existUser);
  }
);

export { router as siginRouter };
