const express = require("express");
const router = express.Router();
const {
  sendStripeToDb,
  sendStripeToStripe
} = require("../controllers/stripe");

console.log("In the stripe router");

router
  .route("/")
  .post(
      sendStripeToStripe,
      sendStripeToDb
      );

module.exports = router;
