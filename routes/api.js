const express = require("express");
const router = express.Router();
const Posts = require("../services/post-service");
const Comments = require("../services/comment-service");
const Bookings = require("../services/booking-service");
const BookingDetails = require("../services/booking-details-service");

//ROUTES FOR POSTS
// get a list of posts from the db
router.get("/posts", async (req, res, next) => {
  const postMap = await Posts.findAll();
  let postData = [];
  // For loop to filter the main data from postMap
  for (var i = 0; i < postMap.length; i++) {
    postData.push({
      title: postMap[i].title,
      slug: postMap[i].slug,
      id: postMap[i].id,
      body: postMap[i].body,
      img: postMap[i].img,
      addedby: postMap[i].addedBy.username,
      hidden: postMap[i].hidden,
      recommended: postMap[i].recommended,
      address: postMap[i].address.all,
      country: postMap[i].address.country,
      city: postMap[i].address.city,
      availablestart: postMap[i].availability.start,
      availableend: postMap[i].availability.end
    });
  }
  res.send(postData);
});

// Pots by ID - Map

router.get("/apartments/:id", async (req, res, next) => {
  // Object IDyi de kullanarak find yap, o object IDyi taşıyan postun IDsini döndür
  await Posts.findById({ _id: req.params.id })
    .then(data => {
      res.send(data);
    })
    .catch(next);
});

// add a new post to the db
router.post("/addproperty", async (req, res, next) => {
  const newpost = await Posts.add(req.body);
  await Bookings.add(req.body);
  res.send(newpost);
});

// add availibility of the property. Runs after creating apartment listing
router.post("/addavailability", async (req, res, next) => {
  const newpost = await Bookings.add(req.body);
  res.send(newpost);
});

// Add comment to existing post

router.post("/posts/:id/add", async function(req, res, next) {
  Posts.findById({ _id: req.params.id }).then(searchedpost => {
    Comments.add(req.body)
      .then(commentdata => {
        searchedpost.comments.push(commentdata.id);
        const updated = searchedpost.save();
        res.send(updated);
      })
      .catch(next);
  });
});

//ROUTES FOR BOOKINGS

//ROUTES FOR BOOKING DETAILS

module.exports = router;
