const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create post Schema

const PostSchema = new Schema({
	type: mongoose.Schema.Types.ObjectId,
	title:  String,
	slug: String,
	body: String,
	img: [
		String,
	],
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}    
	],
	addedBy: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		username: String
	},
	
	hidden: {
		type: Boolean,
		default: false
	}
});


// Turn that schema to a model
module.exports = mongoose.model('posts', PostSchema); 

