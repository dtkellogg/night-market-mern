const { v4: uuid } = require("uuid");
const stripe_key = process.env.STRIPE_KEY;
const stripeAPI = require("stripe")(stripe_key);
const Stripe = require("../models/Stripe");

// @desc  Create a stripe
// @route POST /api/v1/stripes
// @access NM2
exports.sendStripeToDb = async (req, res, next) => {
  try {
    // req.body gives the object that was sent for the post request
    try {const stripe = await Stripe.create(req.body) } catch (err) {console.log(err)}

    console.log(stripe);

    res.status(201).json({
      success: true,
      data: stripe,
    });
    next();
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Please send a new stripe." });
    }
    res.status(500).json({ error: "Server error" });
  }
};

exports.sendStripeStripe = async (req, res, next) => {
    try {
        console.log("In stripe backend");
        const { product, token } = req.body;
        console.log("PRODUCT", product);
        console.log("PRICE", product.price);
        const idempontencyKey = uuid();

        const data = stripeAPI.customers.create({
            email: token.email,
            source: token.id,
        })

        stripeAPI.charges.create(
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
            { idempontencyKey })

        res.status(200).json({
                success: true,
                data: stripe,
            })
        next()
      } catch (err) {
        console.log(err);
      }
  }

////////////////////////////////////////////////////////////////