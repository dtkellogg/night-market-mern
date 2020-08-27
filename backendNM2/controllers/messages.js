const nodemailer = require("nodemailer");
const request = require("request");

// Environment variables
const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;


const Message = require("../models/Message");

// @desc  Create a message
// @route POST /api/v1/messages
// @access NM2
exports.sendMessageToDb = async (req, res, next) => {
  try {
    // req.body gives the object that was sent for the post request
    const message = await Message.create(req.body);

    console.log(message)
    
      res.status(201).json({
      success: true,
      data: message, 
    })
    next();
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Please send a new message." });
    }
    res.status(500).json({ error: "Server error" });
  }
};

exports.sendMessageToNodeMailer = async (req, res, next) => {
  try {
    
      console.log("Inside the nodemail server.js post request");

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
        request(mailOptions, (err, response, body) => {
          if (err) {
            res.redirect("/components/404");
          } else {
            if (response.statusCode === 200) {
            } else {
              res.redirect("/components/404");
            }
          }
        });
      },
      console.log("Made it through both message middleware"))
      next()
  } catch (err) {
    console.log(err)
  }
};

exports.response = async (req, res, next) => {
  try {
  console.log('Complete. In third middleware')

  res.status(201).json({
  success: true,
  data: false,
})
  }
  catch (err) {

  }
}