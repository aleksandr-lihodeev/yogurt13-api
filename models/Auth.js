import { Schema, model } from "mongoose";

const AuthSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  hash_pass: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});
export default model("Auth", AuthSchema);
