var express = require('express');
var router = express.Router();
const User = require("../models/User")
const userDetials = require("../middlewares/userDetials")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post( "/",userDetials, async( req, res, next ) => {
  req.body.details = req.user;
  const user = await User.create(req.body);
  res.render("error")
} )

module.exports = router;

