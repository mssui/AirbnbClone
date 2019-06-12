const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user-model");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/signin");
}

// Login Route
router.post(
  "/signin",
  passport.authenticate("local", { session: true }),
  (req, res, next) => {
    if (req.isAuthenticated()) {
      res.send({ message: "sucsess", id: req.session.passport.user });
    } else {
      res.send({ message: "fail" });
    }
  }
);

// Logout Route

router.get("/logout", async (req, res) => {
  await req.logout();
  req.session = null;
  return res.send({ message: "You have sucsessfully logged out." });
});

// Register Route

router.post("/signup", (req, res) => {
  User.register(
    new User({
      username: req.body.username,
      bio: req.body.bio,
      image: req.body.image,
      gender: req.body.gender,
      email: req.body.email
    }),
    req.body.password,
    err => {
      if (err) {
        return res.send("Sorry. That username already exists. Try again.");
      } else {
        console.log("user: " + user.email + " saved.");
        req.login(user, function(err) {
          if (err) {
            console.log(err);
          }
          return res.redirect("/");
        });
      }
    }
  );
});

// Restricted Routes will be here

// router.all("*", (req, res, next) => {
//   if (!req.user) res.sendStatus(403);
//   else next();
// });

module.exports = router;
