const commentModel = require('../models/comment-model')

async function findAll () {
  return commentModel.find()
}
async function add (comments) {
  return commentModel.create(comments)
}
async function find (params) {
  return commentModel.find(params)
}
async function findByIdAndRemove (params) {
  return commentModel.findByIdAndRemove(params)
}
async function findByIdAndUpdate (id) {
  return commentModel.findByIdAndUpdate(id)
}
async function findById(id) {
  return commentModel.findOne(id);
}


module.exports = {
  findAll,
  add,
  find,
  findByIdAndRemove,
  findByIdAndUpdate,
  findById
}
