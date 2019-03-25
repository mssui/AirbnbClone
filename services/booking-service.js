const bookings = require("../models/booking-model");

async function findAll() {
  return bookings.find().populate("comments");
}

async function add(Posts) {
  return bookings.create(Posts);
}

async function findOne(id) {
  return bookings.findOne({ id });
}

async function findById(id) {
  return bookings.findOne(id);
}
async function findBook(params) {
  return bookings.find(params);
}

module.exports = {
  findAll,
  add,
  findOne,
  findById,
  findBook
};
