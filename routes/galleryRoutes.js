// routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processGalleryData } = require('../controllers/galleryController');

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to handle gallery submissions
router.post('/submit', upload.array('galleryImages'), (req, res, next) => {
  console.log('Received gallery submission');
  processGalleryData(req, res).catch(next);
});

module.exports = router;