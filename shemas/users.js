import { Schema, model } from "mongoose";

import handleMongooseError from "../helpers/handleMongooseError.js";

const userSchems = new Schema(
  {
    name: { type: String },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: { type: String, default: "" },
  },
  { autoCreate: false, autoIndex: false, versionKey: false, timestamps: true }
);

userSchems.post("save", handleMongooseError);

const User = model("user", userSchems);

export default User;
