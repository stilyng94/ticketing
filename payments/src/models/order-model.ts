import mongoose from "mongoose";
import { OrderStatus } from "@lotus_yng_dev_tickets/common";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface IOrderAttrs {
  userId: string;
  status: OrderStatus;
  price: number;
  id: string;
  version: number;
}

interface IOrderDoc extends mongoose.Document {
  userId: string;
  status: OrderStatus;
  price: number;
  version: number;
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
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
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
