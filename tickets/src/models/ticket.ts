import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface ITicketAttrs {
  title: string;
  price: number;
  userId: string;
}
interface ITicketDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
  version: number;
  orderId?: string;
}

interface ITicketModel extends mongoose.Model<ITicketDoc> {
  build(attrs: ITicketAttrs): ITicketDoc;
}

const ticketSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
    orderId: { type: String },
  },
  {
    timestamps: true,

    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return;
      },
    },
  }
);
ticketSchema.set("versionKey", "version");
ticketSchema.plugin(updateIfCurrentPlugin);
ticketSchema.statics.build = (attrs: ITicketAttrs) => new Ticket(attrs);

const Ticket = mongoose.model<ITicketDoc, ITicketModel>("Ticket", ticketSchema);

export { Ticket };
