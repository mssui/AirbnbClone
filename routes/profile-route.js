const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send(req.user) // send user details
  // if (req.isAuthenticated()) { return next(); }
})

module.exports = router
