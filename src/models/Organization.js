import { Schema, model } from "mongoose";
const organizationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    nit: {
      type: Number,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Organization", organizationSchema);
