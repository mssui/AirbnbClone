const express = require("express");
const router = express.Router();
const User = require("../services/user-service");
const Posts = require("../services/post-service");
const Bookingservice = require("../services/booking-service");
const BookingDetails = require("../services/booking-details-service");

// Find posts addedBy the User. Search by User ID taken from params
router.get("/:id", async (req, res, next) => {
  var posts = await Posts.findSlug({ addedBy: req.params.id });

  let userPosts = [];
  // For loop to filter the usable data from Userposts
  for (var i = 0; i < posts.length; i++) {
    userPosts.push({
      title: posts[i].title,
      slug: posts[i].slug,
      id: posts[i].id,
      body: posts[i].body,
      img: posts[i].img,
      addedby: posts[i].username,
      hidden: posts[i].hidden,
      recommended: posts[i].recommended,
      address: posts[i].address.all,
      country: posts[i].address.country,
      city: posts[i].address.city,
      availablestart: posts[i].start,
      availableend: posts[i].end
    });
  }
  res.send(posts);
});

// Find bookings payed the User. Search by User ID taken from params

//User ID is not added to Booking model yet! After, this route will be changed.
router.get("/bookings/:id", async (req, res, next) => {
  res.send(req.params.id);
});

// Find favorites of the the User. Search by User ID taken from params

//Favourite feature is not created yet! After, this route will be changed.
router.get("/favs/:id", async (req, res, next) => {
  res.send(req.params.id);
});

module.exports = router;
