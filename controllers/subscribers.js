const request = require("request");

// Environment variables
const mailchimpListId = process.env.MAILCHIMP_LIST_ID;
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;


const Subscriber = require("../models/Subscriber");

// @desc  Create a message
// @route POST /api/v1/newsletterSubscribers
// @access NM2
exports.sendSubscriberToDb = async (req, res, next) => {
    try {
        // req.body gives the object that was sent for the post request
        const subscriber = await Subscriber.create(req.body);

        console.log(`sendSubscriberToDb: ${subscriber}`)

        res.status(201).json({
            success: true,
            data: subscriber,
        })

        next()
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: "Please submit a new email address." });
        }
        res.status(500).json({ error: "Server error" });
    }
};

exports.sendSubscriberToMailChimp = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Make sure fields are filled
    if (!email) {
      console.log('fail');
      return;
    }

    const data = {
      members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
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
      console.log('Data sent to mailchimp')
      if (err) {
          console.log(err)
      } else {
        if (response.statusCode === 200) {
          // res.redirect("/components/Home.js");
          next();
        } else {
          res.redirect("/components/404");
        }
      }
    });
  } catch (err) {
        console.log(err)
  }
}

//////////////
/////////////////////

exports.response = async (req, res, next) => {
  try {
    return('success')
  } catch (err) {
    console.log("Error. In third middleware");
  }
};