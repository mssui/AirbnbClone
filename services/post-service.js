const postModel = require('../models/posts-model');

async function findAll() { 
    return postModel.find().populate('comments');
}

async function add(Posts) {
    return postModel.create(Posts);
}

async function findOne(id) {
    return postModel.findOne({id});
}

async function findById(id) {
    return postModel.findOne(id);
}

async function findPost(params) { 
    return  Posts.findById(params)
}
async function findSlug(params) { 
    return postModel.find(params)
}

module.exports = {
    findAll,
    add,
    findOne,
    findById,
    findPost,
    findSlug
};
