const userModel = require('../models/user-model');

async function findUser(id) {
    return userModel.findOne({id});
}
async function find(params) { 
    return userModel.find(params)
}
async function findProfile(params) { 
    return userModel.find(params)
}


module.exports = {
    findUser,
    find,
    findProfile
};
