const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const request = require("request");
const exphbs = require("express-handlebars");
require('dotenv').config();

// Environment variables
const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;
const mailchimpListId = process.env.MAILCHIMP_LIST_ID;
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

const app = express();

// // View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Contact Form
app.post("/api/sendMail", (req, res) => {

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Company: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    auth: {
      user: email, // generated ethereal user
      pass: password, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

   // send mail with defined transport object
    let mailOptions = {
        from: '"Nodemailer Contact" <toshiKtest@gmail.com>', // sender address
        to: "dtkellogg10@gmail.com", // list of receivers
        subject: "Node Contact Request", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    request(options, (err, response, body) => {
      if (err) {
        res.redirect("/components/404");
      } else {
        if (response.statusCode === 200) {
          res.redirect("/components/Home.js");
        } else {
          res.redirect("/components/404");
        }
      }
    });
  });
})



/////////////////////////////////
// MAILCHIMP

// static folder

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Static folder
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
});

// Signup Route
app.post("/api/signup", (req, res) => {
  const { firstName, lastName, email } = req.body;

  console.log(firstName + " " + lastName + " " + email)
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

  request(options, (err, response, body) => {
    if (err) {
      res.redirect("/components/404");
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

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));