const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// create User Schema

const userSchema = new Schema(
  {
    image: {
      type: String,
      default: "https://img.icons8.com/doodle/1600/user-female-red-hair.png"
    },
    bio: {
      type: String,
      default: "Hello! I am new here."
    },
    gender: {
      type: String,
      default: "None"
    },
    // Properties added to wishlist
    favs: [],

    // Properties user to has booked
    books: [],

    // Properties user to has listed
    posts: [],
    email: String
  },
  { strict: false }
); // Not strict form of data
userSchema.plugin(passportLocalMongoose, {
  usernameQueryFields: [
    "image",
    "email",
    "bio",
    "gender",
    "favs",
    "books",
    "posts"
  ]
});

module.exports = mongoose.model("User", userSchema);
