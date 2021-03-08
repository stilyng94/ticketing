import mongoose from "mongoose";
import { PasswordManager } from "../utils/password";

interface IUserAttrs {
  email: string;
  password: string;
}

interface IUserModel extends mongoose.Model<IUserDoc> {
  build(attrs: IUserAttrs): IUserDoc;
}

interface IUserDoc extends mongoose.Document {
  email: string;
  password: string;
  updatedAt: string;
  createdAt: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        delete ret.password;
        delete ret._id;
        delete ret.__v;
        return;
      },
    },
  }
);

userSchema.statics.build = (attrs: IUserAttrs) => new User(attrs);
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashed = await PasswordManager.toHash(this.get("password"));
    this.set("password", hashed);
  }
  return next();
});

const User = mongoose.model<IUserDoc, IUserModel>("User", userSchema);

export { User };
