// const express = require("express");
// const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
// const path = require("path");
// const cookieParser = require("cookie-parser")
// const nodemailer = require("nodemailer");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());

// app.post("/api/sendMail", (req, res) => {})


/////////////
///////////
/////////////


const express = require("express");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

const app = express();

// View engine setup
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

// Static folder
// app.use("/public", express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

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
      user: 'toshiKtest@gmail.com', // generated ethereal user
      pass: '12q7m9pr', // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
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
    if (error) {
      return console.log(error);
    }

    res.render("/client/src/components/Contact.js", {
      msg: "Email has been sent",
    });
  });
})

app.listen(5000, () => console.log("Server started..."));
