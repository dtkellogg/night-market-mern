const mongoose = require("mongoose");
// const geocoder = require("../utils/geocoder")

const MessageSchema = new mongoose.Schema({
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

// // Geocode & create location middleware
// This makes it so any data that is added to the db will have it's location converted to geocode right before its added to the db
// StoreSchema.pre("save", async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   this.location = {
//     type: "Point",
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress,
//   };

//   // Do not save address
//   this.address = undefined;
//   next();
// });

module.exports = mongoose.model("Message", MessageSchema);
