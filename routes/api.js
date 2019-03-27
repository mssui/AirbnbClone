const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const moment = require("moment");
const Posts = require("../services/post-service");
const Comments = require("../services/comment-service");
const Bookingservice = require("../services/booking-service");
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

// creating apartment listing
router.post("/addproperty", async (req, res, next) => {
  const newpost = await Posts.add(req.body);
  res.send(newpost);
});

// add availibility of the property. Runs after creating apartment listing
router.post("/addavailability", async (req, res, next) => {
  const newpost = await Bookingserviceervice.add(req.body);
  res.send(newpost);
});

//ROUTES FOR Bookingservice & BookingDetails

// Book the property with the user's defined dates
// After add it to booking service,Runs after Book the property  so on property page booked dates are not avaliable anymore

router.post("/book-this-property", function(req, res, next) {
  BookingDetails.add(req.body).then(data => {
    Bookingservice.findById({ propertyid: data.property })
      .then(found => {
        found.booked.push(req.body.date);
        const updated = found.save();
        res.send(updated);
      })
      .catch(next);
  });
});

module.exports = router;
