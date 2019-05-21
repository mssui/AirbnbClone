const userModel = require("../models/user-model");

async function findUser(id) {
  return userModel.findOne({ id });
}

async function findandAdd(user, id) {
  return userModel.update(
    { _id: user },
    { $addToSet: { favs: id } },
    (err, doc) => {
      if (err) {
        console.log("Something wrong while adding favs!", doc);
      }
    }
  );
}
async function findandRemove(user, id) {
  return userModel.update(
    { _id: user },
    { $pull: { favs: id } },
    (err, doc) => {
      if (err) {
        console.log("Something wrong while removing favs!", doc);
      }
    }
  );
}
async function find(params) {
  return userModel.find(params);
}
async function findProfile() {
  return userModel.find();
}
async function add(Posts) {
  return userModel.create(Posts);
}

module.exports = {
  findUser,
  findandAdd,
  findandRemove,
  find,
  findProfile,
  add
};
