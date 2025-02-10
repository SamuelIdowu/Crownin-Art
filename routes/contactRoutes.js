


const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");

// Contact Page (GET)
router.get("/", (req, res) => {
  res.render("layouts/contact");
});

// Contact Form Submission (POST)
router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL/TLS
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: "New message from your website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.redirect("/contact");
    } else {
      console.log("Email sent: " + info.response);
      res.redirect("/contact");
    }
  });
});

module.exports = router;