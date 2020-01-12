/* eslint-disable standard/object-curly-even-spacing */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");

mongoose.Promise = global.Promise;
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacttest", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const User = require("./models/user-model");

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(
  function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    if ("OPTIONS" == req.method) {
      res.send(200);
    } else {
      next();
    }
  },
  session({
    secret: "hernameislola",
    saveUninitialized: false,
    resave: true,
    cookie: { maxAge: 3600000 }
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

app.use("/api", require("./routes/api"));
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/profile-route"));

app.get("/auth/login", (req, res) => {
  res.render({ username: req.user.username });
});

// Handle production and SPA
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is running on:", port);
});
