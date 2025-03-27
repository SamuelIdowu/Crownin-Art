// routes/galleryRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Gallery = require("../models/gallery");
const { processGalleryData } = require("../controllers/galleryController");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Image serving route
router.get("/image/:galleryId/:imageIndex", async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.galleryId);
    if (!galleryItem) return res.status(404).send("Gallery item not found");

    const imageIndex = parseInt(req.params.imageIndex);
    const image = galleryItem.images[imageIndex];

    if (!image) return res.status(404).send("Image not found");

    res.set("Content-Type", image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error("Error serving gallery image:", error);
    res.status(500).send("Server error");
  }
});

// Submission route
router.post("/submit", upload.array("galleryImages"), (req, res, next) => {
  console.log("Received gallery submission");
  processGalleryData(req, res).catch(next);
});

module.exports = router;
