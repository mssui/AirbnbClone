
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// create User Schema

const userSchema = new Schema({
	image: {
		type: String,
		default: 'https://img.icons8.com/doodle/1600/user-female-red-hair.png'
	},
	bio: {
		type: String,
		default: 'Merhaba! İçeriklerime göz at.'
	},
	gender: {
		type: String,
		default: 'Bilinmiyor'
	},
	favs: [
		{
			type: String
		}    
	],
	email: String,
},{strict:false}); // Not strict form of data
userSchema.plugin(passportLocalMongoose, { usernameQueryFields: ['image', 'email', 'bio', 'gender','favs'] });

module.exports = mongoose.model('User', userSchema);