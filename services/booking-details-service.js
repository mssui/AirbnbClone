const bookDetails = require("../models/booking-details-model");

async function findAll() {
  return bookDetails.find().populate("comments");
}

async function add(Posts) {
  return bookDetails.create(Posts);
}

async function findOne(id) {
  return bookDetails.findOne({ id });
}

async function findById(id) {
  return bookDetails.findOne(id);
}

async function findDetail(params) {
  return bookDetails.find(params);
}

module.exports = {
  findAll,
  add,
  findOne,
  findById,
  findDetail
};
