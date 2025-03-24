const express = require("express");
const router = express.Router();
const multer = require("multer");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const Listing = require("../models/listing");
const { processListingData } = require("../controllers/listingController");




dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/submit", upload.array("listingImages"), (req, res, next) => {
  console.log("Received listing submission");
  processListingData(req, res).catch(next);
});


// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// router.post("/send-inquiry/:listingId", async (req, res) => {
//   try {
//     const listing = await Listing.findById(req.params.listingId);

//     if (!listing) {
//       return res.status(404).json({ error: "Listing not found" });
//     }

//     // Construct email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "thenasis2@gmail.com",
//       subject: `Inquiry about ${listing.title}`,
//       text: `Hello,\n\nI am interested in purchasing '${listing.title}' for ${listing.price}. Please provide more details.\n\nThank you.`,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     console.log({ message: "Inquiry sent successfully" });
//     res.status(200).json({ message: "Inquiry sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Error sending email" });
//   }
// });

module.exports = router;
