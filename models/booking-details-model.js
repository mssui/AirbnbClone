const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Booking Schema

const BookingSchema = new Schema({
  type: mongoose.Schema.Types.ObjectId,
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts"
  },
  date: {
    start: Date,
    end: Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  num_guests: Number,
  payedwith: String
});

// Turn that schema to a model
module.exports = mongoose.model("BookingDetail", BookingSchema);
