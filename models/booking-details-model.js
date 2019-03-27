const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Booking Schema

const BookingSchema = new Schema({
  type: mongoose.Schema.Types.ObjectId,
  property: String, // Here I might change to ref to posts
  date: {
    start: Date,
    end: Date
  },
  user: String,
  num_guests: Number,
  payedwith: String,
  total_amount: Number
});

// Turn that schema to a model
module.exports = mongoose.model("BookingDetail", BookingSchema);
