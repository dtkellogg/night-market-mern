const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const request = require("request");
const exphbs = require("express-handlebars");
const cors = require("cors")
const connectDB = require("./config/db")

// Load environment variables
require('dotenv').config({ path: './config/config.env'});

// Connect to database
connectDB()


const app = express();

// Environment variables
const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;
const mailchimpListId = process.env.MAILCHIMP_LIST_ID;
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

// // View engine setup
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
// app.use('/api/v1/team', require('./routes/team'))
app.use('/api/v1/messages', require('./routes/messages'))


////////////
/////////////////////////////////
// MAILCHIMP

// static folder

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Static folder
app.use(express.static(path.join(__dirname, "../NM2/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../NM2/build/index.html"))
});

// Signup Route
app.post("/api/signup", (req, res) => {
  const { firstName, lastName, email } = req.body;

  console.log(`New subscriber: ${firstName} ${lastName}, ${email}`)
  // Make sure fields are filled
  if (!firstName || !lastName || !email) {
    console.log('fail');
    return;
  }

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const postData = JSON.stringify(data);

  const options = {
    url: `https://us17.api.mailchimp.com/3.0/lists/${mailchimpListId}`,
    method: "POST",
    headers: {
      Authorization: `auth ${mailchimpApiKey}`,
    },
    body: postData,
  };

  console.log(options)

  request(options, (err, response, body) => {
    console.log('Data sent to mailchimp')
    if (err) {
      console.log(err)
    } else {
      if (response.statusCode === 200) {
        res.redirect("/components/Home.js");
      } else {
        res.redirect("/components/404");
      }
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`));