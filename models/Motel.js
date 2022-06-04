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
  address: {
    type: String,
  },
  phone_number: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
  },
  area: {
    type: Number,
  },
  renter: {
    type: String,
  },
  image: {
    type: String,
  },
  video: {
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
