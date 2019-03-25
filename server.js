/* eslint-disable standard/object-curly-even-spacing */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

mongoose.Promise = global.Promise;
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacttest");
const User = require("./models/user-model");
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "hernameislola",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 }
  })
);
app.use("*", cors());
passport.serializeUser((user, done) => {
  done(null, user.id); // ID is enough to store
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

app.use("/", require("./routes/api"));
app.use("/auth", require("./routes/auth"));
app.use("/profile", require("./routes/profile-route"));

app.get("/auth/login", (req, res) => {
  res.render({ username: req.user.username });
});

// Handle production and SPA
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(port, () => {
  console.log("Server is running on:", port);
});
