const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Booking Schema

const BookSchema = new Schema({
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts"
  },
  propertyid: String,
  hidden: {
    type: Boolean,
    default: false
  },
  availability: { start: Date, end: Date },
  not_available: [String],
  booked: [
    {
      start: Date,
      end: Date
      // user: String,
      // bookingid: String
    }
  ]
});

// Turn that schema to a model
module.exports = mongoose.model("Bookings", BookSchema);
