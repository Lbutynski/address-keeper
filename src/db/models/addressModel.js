import { addressSchema } from "@/db/schemas/addressSchema";
import mongoose from "mongoose";

export const addressModel =
  mongoose.models.Address || mongoose.model("Address", addressSchema);
