// routes/listingRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processListingData } = require('../controllers/listingController');

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to handle listing submissions
router.post('/submit', upload.array('listingImages'), (req, res, next) => {
  console.log('Received listing submission');
  processListingData(req, res).catch(next);
});

module.exports = router;