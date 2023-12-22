import { Schema, model } from "mongoose";

const Cocktailchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  limit: {
    type: String,
    required: true,
  },
  select: {
    type: Boolean,
    default: false,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
export default model("Cocktail", Cocktailchema);
