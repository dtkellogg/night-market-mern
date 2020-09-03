const mongoose = require("mongoose");
// const geocoder = require("../utils/geocoder")

const StripeSchema = new mongoose.Schema({
  message: {
    type: String,
    unique: true,
    required: [true, "Please add a message"],
  },
  name: {
    type: String,
    // required: [true, "Please add a store ID"],
    trim: true,
    unique: false,
    maxlength: [10, "Store ID must be less than 10 chars"],
  },
  email: {
    type: String,
    required: [true, "Please add an email address"],
  },
  phone: {
    type: Number,
  },
  subject: {
    type: String,
    required: [true, "Please add a subject"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Stripe", StripeSchema);
