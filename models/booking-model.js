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
  availability: {
    start: Date,
    end: Date
  },
  booked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BookingDetails"
    }
  ]
});

// Turn that schema to a model
module.exports = mongoose.model("Bookings", BookSchema);
