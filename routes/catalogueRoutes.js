// routes/catalogueRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processCatalogueData } = require('../controllers/catalogueController');

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to handle catalogue submissions
router.post('/submit', upload.array('catalogueImages'), (req, res, next) => {
  console.log('Received catalogue submission');
  processCatalogueData(req, res).catch(next);
});

module.exports = router;