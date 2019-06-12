const express = require("express");
const router = express.Router();
const UserService = require("../services/user-service");
const Posts = require("../services/post-service");
const { ObjectID } = require("mongodb");

// GET REQUESTS

// Find posts addedBy the User. Search by User ID taken from params
router.get("/:id", async (req, res, next) => {
  var posts = await Posts.findSlug({ addedBy: req.params.id });
  let userPosts = [];
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
  res.send(userPosts);
});

// Find bookings payed the User. Search by User ID taken from params

//User ID is not added to Booking model yet! After, this route will be changed.
router.get("/bookings/:id", async (req, res, next) => {
  res.send(req.params.id);
});

// Find favorites of the the User. Search by User ID taken from params
router.get("/favs/:id", async (req, res) => {
  var finduser = await UserService.find({ _id: req.params.id });
  var favs = finduser[0].favs;
  res.send(favs);
  // if (favs) {
  //   var objectIds = favs.map(item => {
  //     return ObjectID(item);
  //   });
  //   var findfavs = await UserService.getFavs(objectIds);
  //   let iteratedFavs = [];
  //   for (var i = 0; i < findfavs.length; i++) {
  //     iteratedFavs.push({
  //       title: findfavs[i].title,
  //       slug: findfavs[i].slug,
  //       id: findfavs[i].id,
  //       body: findfavs[i].body,
  //       img: findfavs[i].img,
  //       addedby: findfavs[i].username,
  //       hidden: findfavs[i].hidden,
  //       recommended: findfavs[i].recommended,
  //       address: findfavs[i].address.all,
  //       country: findfavs[i].address.country,
  //       city: findfavs[i].address.city,
  //       availablestart: findfavs[i].start,
  //       availableend: findfavs[i].end
  //     });
  //   }

  //   res.send(iteratedFavs);
  // } else {
  //   res.send("Could not fetch");
  // }
});

// POST REQUESTS

//Add an apartment to user's favourite array
router.post("/addtofavourites", async (req, res) => {
  var user = req.body.user;
  var post = req.body.post;
  var whois = await UserService.findandAdd(user, post);
  res.send(whois);
});

//Remove an apartment from user's favourite array
router.post("/removefavourite", async (req, res) => {
  var user = req.body.user;
  var post = req.body.post;
  var whois = await UserService.findandRemove(user, post);
  res.send(whois);
});

module.exports = router;
