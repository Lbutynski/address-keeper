import { Schema } from "mongoose"

export const AddressSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: Number, required: true },
  country: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Restaurant", "Museum", "Bar", "Parc"],
  },
  restaurantDetails: {
    cuisineType: { type: String },
    starNumber: { type: Number },
    medianPrice: { type: Number },
  },
  museumDetails: {
    artisticCurrent: { type: String },
    artType: { type: String },
    museumPriceOrder: { type: Number },
    museumPrice: { type: Number },
  },
  barDetails: {
    barType: { type: String },
    barPriceOrder: { type: Number },
  },
  parcDetails: {
    parcType: { type: String },
    isPublic: { type: Boolean },
    parcPriceOrder: { type: Number },
    parcPrice: { type: Number },
  },
})
