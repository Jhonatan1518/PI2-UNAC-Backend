import { Schema, model } from "mongoose";

const parkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    departament: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    ubication: {
      type: String,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Park", parkSchema);
