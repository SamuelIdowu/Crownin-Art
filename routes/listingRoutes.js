

const express = require("express");
const router = express.Router();
const multer = require("multer");
const Listing = require("../models/listing");
const { processListingData } = require("../controllers/listingController");



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/send-artwork/submit", upload.array("listingImages"), (req, res, next) => {
  console.log("Received listing submission");
  processListingData(req, res).catch(next);
});

// // routes/listings.js
router.get("/image/:id/:index", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).send("Listing not found");

    const imageIndex = parseInt(req.params.index);
    const image = listing.images[imageIndex];
    if (!image) return res.status(404).send("Image not found");

    res.set("Content-Type", image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
