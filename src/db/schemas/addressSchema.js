import { Schema } from "mongoose";

export const addressSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  city: { type: String, required: true },
  postalCode: { type: Number, required: true },
  country: { type: String, required: true },
  restaurantDetails: {
    cuisineType: { type: String },
    starNumber: { type: Number },
    medianPrice: { type: Number },
  },
});
