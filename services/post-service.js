const postModel = require("../models/posts-model");

async function findAll() {
  return postModel.find();
}

async function add(Posts) {
  return postModel.create(Posts);
}

async function findById(id) {
  return postModel.findOne(id);
}

async function findSlug(params) {
  return postModel.find(params);
}

async function findCountry(a) {
  return postModel.find({ "address.country": a });
}

async function findPostsByParams(date_end, date_start, num_guest, lat, lng) {
  return postModel.find({
    $and: [
      { max_guest_num: { $gte: num_guest } },
      { end: { $gt: new Date(date_end) } },
      { start: { $lt: new Date(date_start) } },
      {
        loc: {
          $near: {
            $geometry: { type: "Point", coordinates: [lat, lng] }
          }
        }
      }
    ]
  });
}

module.exports = {
  findAll,
  add,
  findById,
  findSlug,
  findCountry,
  findPostsByParams
};
