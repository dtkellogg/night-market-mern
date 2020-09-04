const express = require("express");
const router = express.Router();
const {
  sendSubscriberToDb,
  sendSubscriberToMailChimp,
  response
} = require("../controllers/subscribers");

console.log("In the subscribers router")

router.route("/").post(sendSubscriberToDb, sendSubscriberToMailChimp, response); 

module.exports = router;
