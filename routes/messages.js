const express = require("express");
const router = express.Router();
const {
  sendMessageToDb,
  sendMessageToNodeMailer, response
} = require("../controllers/messages");

console.log("In the router")

router
  .route("/")
  // .get(getTeam)
  .post(sendMessageToDb, sendMessageToNodeMailer, response)

router.use("/", (req, res) => {
  res.send("Hello");
});

module.exports = router;
