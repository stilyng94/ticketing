import {
  BadRequestError,
  currentUserWare,
  NotAuthorizedError,
  OrderStatus,
  validateRequestWare,
} from "@lotus_yng_dev_tickets/common";
import express from "express";
import { body } from "express-validator";
import { PaymentCreatedPublisher } from "../events/publishers/payment-created-publisher";
import { natsWrapper } from "../nats-wrapper";
import { Order } from "../models/order-model";
import { Payment } from "../models/payments-model";
import { stripe } from "../stripe-config";

const newChargeRouter = express.Router();

newChargeRouter.post(
  "/api/payments",
  currentUserWare,
  body("token").notEmpty(),
  body("orderId").notEmpty(),
  validateRequestWare,
  async (req, res) => {
    const { token, orderId } = req.body;
    const order = await Order.findById(orderId).exec();
    if (!order) {
      throw new BadRequestError("Order not found");
    }
    if (order.userId !== req.currentUser!.userId) {
      throw new NotAuthorizedError();
    }
    if (order.status === OrderStatus.Cancelled) {
      throw new BadRequestError("Cannot pay for a cancelled order.");
    }

    //!Create a stripe charge
    const charge = await stripe.charges.create({
      amount: order.price * 100,
      currency: "usd",
      receipt_email: req.currentUser!.email,
      source: token,
    });
    const newPayment = Payment.build({ orderId, stripeId: charge.id });
    await newPayment.save();
    await new PaymentCreatedPublisher(natsWrapper.client).publish({
      id: newPayment.id,
      orderId: newPayment.orderId,
      stripeId: newPayment.stripeId,
      version: newPayment.version,
    });
    return res.status(200).json({ id: newPayment.id });
  }
);

export { newChargeRouter };
