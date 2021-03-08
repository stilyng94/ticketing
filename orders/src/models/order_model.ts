import mongoose from "mongoose";
import { OrderStatus } from "@lotus_yng_dev_tickets/common";
import { ITicketDoc } from "./ticket";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

const calcExpiration = (): Date => {
  const expiration = new Date();
  expiration.setUTCMinutes(expiration.getUTCMinutes(), 15);
  return expiration;
};

interface IOrderAttrs {
  userId: string;
  status?: OrderStatus;
  ticket: ITicketDoc;
  expiresAt?: Date;
}

interface IOrderDoc extends mongoose.Document {
  userId: string;
  status: OrderStatus;
  ticket: ITicketDoc;
  expiresAt: string;
  version: number;
  updatedAt: string;
  createdAt: string;
}

interface IOrderModel extends mongoose.Model<IOrderDoc> {
  build(attrs: IOrderAttrs): IOrderDoc;
}

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
      default: OrderStatus.Created,
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date,
      default: calcExpiration,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        ret.expiresAt = ret.expiresAt.toISOString();
        delete ret._id;
        return;
      },
    },
  }
);

orderSchema.set("versionKey", "version");
orderSchema.plugin(updateIfCurrentPlugin);

orderSchema.statics.build = (attrs: IOrderAttrs) => new Order(attrs);

const Order = mongoose.model<IOrderDoc, IOrderModel>("Order", orderSchema);

export { Order };
