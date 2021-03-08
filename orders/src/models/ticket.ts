import mongoose from "mongoose";
import { Order } from "./order_model";
import { OrderStatus } from "@lotus_yng_dev_tickets/common";
// import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface ITicketAttrs {
  id: string;
  title: string;
  price: number;
}

export interface ITicketDoc extends mongoose.Document {
  title: string;
  price: number;
  updatedAt: string;
  createdAt: string;
  version: number;
  isReserved(): Promise<boolean>;
}

interface ITicketModel extends mongoose.Model<ITicketDoc> {
  build(attrs: ITicketAttrs): ITicketDoc;
  findByEvent(data: {
    id: string;
    version: number;
  }): Promise<ITicketDoc | null>;
}

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0.0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        delete ret._id;
        return;
      },
    },
  }
);

ticketSchema.set("versionKey", "version");
// ticketSchema.plugin(updateIfCurrentPlugin);

ticketSchema.pre("save", function (done) {
  this.$where = { version: this.get("version") - 1 };
  return done();
});

ticketSchema.statics.build = (attrs: ITicketAttrs) =>
  new Ticket({ ...attrs, id: undefined, _id: attrs.id });
ticketSchema.statics.findByEvent = (data: { id: string; version: number }) => {
  return Ticket.findOne({
    _id: data.id,
    version: data.version - 1,
  }).exec();
};
ticketSchema.methods.isReserved = async function () {
  const existingOrder = await Order.findOne({
    ticket: this,
    status: {
      $in: [
        OrderStatus.Created,
        OrderStatus.AwaitingPayment,
        OrderStatus.Complete,
      ],
    },
  }).exec();
  return !!existingOrder;
};

const Ticket = mongoose.model<ITicketDoc, ITicketModel>("Ticket", ticketSchema);

export { Ticket };
