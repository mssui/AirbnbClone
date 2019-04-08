const bookings = require("../models/booking-model");

async function findAll() {
  return bookings.find();
}

async function add(Posts) {
  return bookings.create(Posts);
}

async function findOne(id) {
  return bookings.findOne({ id });
}
async function findOneAndUpdate(id) {
  return bookings.findOneAndUpdate({ id });
}

async function findById(id) {
  return bookings.findOne(id);
}
async function findBook(params) {
  return bookings.find(params).populate("booked");
}
async function sortBooks(params) {
  return bookings
    .find(params)
    .sort({ booked: -1 })
    .limit(3);
}

module.exports = {
  findAll,
  add,
  findOne,
  findOneAndUpdate,
  findById,
  findBook,
  sortBooks
};
