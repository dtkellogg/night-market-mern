const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const request = require("request");
const exphbs = require("express-handlebars");
const cors = require("cors")
const { v4: uuid } = require("uuid");
const connectDB = require("./app/config/db")
// const stripe = require("stripe")(stripe_key);

// // Load environment variables
require('dotenv').config({ path: './app/config/config.env'});

// // Connect to database
connectDB()

const app = express();

// attempt with heroku...
// socket = io.listen(process.env.PORT);

// // // View engine setup
// // app.engine("handlebars", exphbs());
// // app.set("view engine", "handlebars");

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static('app/NM2/build'));

// Express serve up index.html file if it doesn't recognize route
// const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app', 'NM2', 'build', 'index.html'));
});
}


// // Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// // Routes
app.use('/api/v1/messages', require('./app/routes/messages'))
app.use('/api/v1/subscribers', require('./app/routes/subscribers'))
// app.use('/api/v1/stripe', require("./routes/stripe"))


////////////////////
//// Stripe

// const { v4: uuid } = require("uuid");
const stripe_key = process.env.STRIPE_KEY;
// const Stripe = require("../models/Stripe");

// const stripe = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripe_key);

// middleware
app.use(express.json());
app.use(cors());

app.post("/api/v1/stripe", (req, res) => {
  // console.log(`In stripe backend ${req.body} and ${req.body[0]}`);
  const { product, token } = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product.price);
  const idempontencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customers) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customers.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

///////////////

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`));