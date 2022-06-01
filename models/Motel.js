import mongoose from "mongoose";

const MotelSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    maxlength: 20,
    required: true,
  },
  ward: {
    type: String,
    maxlength: 50,
    required: true,
  },
  district: {
    type: String,
    maxlength: 50,
    required: true,
  },
  street: {
    type: String,
    maxlength: 50,
  },
  motel_number: {
    type: Number,
  },
  detailed_address: {
    type: String,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  rent_price: {
    type: String,
    required: true,
  },
  motel_area: {
    type: String,
  },
  rental_object: {
    type: String,
  },
  motel_image: {
    type: String,
  },
  motel_video: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "New",
  },
});

export default mongoose.model("Motel", MotelSchema);
