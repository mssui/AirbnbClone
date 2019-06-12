const userModel = require("../models/user-model");
const postModel = require("../models/posts-model");

async function findUser(id) {
  return userModel.findOne({ id });
}

async function findandAdd(user, post) {
  return userModel.update(
    { _id: user },
    { $addToSet: { favs: post } },
    (err, doc) => {
      if (err) {
        console.log("Something wrong while adding favs!", doc);
      }
    }
  );
}
async function findandRemove(user, post) {
  return userModel.update(
    { _id: user },
    { $pull: { favs: post } },
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
async function getFavs(favsArr) {
  return postModel.find({
    _id: {
      $in: favsArr
    }
  });
}
module.exports = {
  findUser,
  findandAdd,
  findandRemove,
  find,
  findProfile,
  add,
  getFavs
};
