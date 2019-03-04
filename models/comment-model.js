const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Comment Schema
var commentSchema = new Schema({
	type: mongoose.Schema.Types.ObjectId,
	text: String,
	title: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		username: String
	},
	relatedid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'posts'
	},
	meta: {
		upvotes: {
			type: Number,
			default: 0
		},
		downvotes: {
			type: Number,
			default: 0
		},
		favs: {
			type: Number,
			default: 0
		}
	}
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
