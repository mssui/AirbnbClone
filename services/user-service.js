const userModel = require("../models/user-model");

async function findUser(id) {
  return userModel.findOne({ id });
}
async function find(params) {
  return userModel.find(params);
}
async function findProfile() {
  return userModel.find();
}
async function add(Posts) {
  return bookings.create(Posts);
}

module.exports = {
  findUser,
  find,
  findProfile,
  add
};
