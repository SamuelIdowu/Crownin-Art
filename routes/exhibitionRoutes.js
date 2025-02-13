const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processExhibitionData } = require('../controllers/exhibitionController');

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to handle exhibition submissions
router.post('/submit', upload.array('exhibitionVideo'), (req, res, next) => {
  console.log('Received exhibition submission');
  processExhibitionData(req, res).catch(next);
});

module.exports = router;