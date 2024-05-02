import { AddressSchema } from "@/db/schemas/addressSchema"
import mongoose from "mongoose"

export const AddressModel =
  mongoose.models.Address || mongoose.model("Address", AddressSchema)
