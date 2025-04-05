// routes/catalogueRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Catalogue = require('../models/catalogue');
const { processCatalogueData } = require('../controllers/catalogueController');

// Set up multer for file uploads
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// Route to handle catalogue submissions
router.post('/submit', upload.array('catalogueImages'), (req, res, next) => {
  processCatalogueData(req, res).catch(next);
});
console.log('Received catalogue submission');

// // routes/catalogue.js
router.get("/image/:id/:index", async (req, res) => {
  try {
    const catalogueItem = await Catalogue.findById(req.params.id);
    if (!catalogueItem) return res.status(404).send("Catalogue item not found");

    const imageIndex = parseInt(req.params.index);
    const image = catalogueItem.images[imageIndex];
    if (!image) return res.status(404).send("Image not found");

    res.set("Content-Type", image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error("Error fetching catalogue image:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;