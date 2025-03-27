// routes/catalogueRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processCatalogueData } = require('../controllers/catalogueController');

// Set up multer for file uploads
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// Route to handle catalogue submissions
router.post('/submit', upload.array('catalogueImages'), (req, res, next) => {
  console.log('Received catalogue submission');
  processCatalogueData(req, res).catch(next);
});

// routes/catalogue.js
router.get('/image/:artworkId/:imageIndex', async (req, res) => {
  try {
    const artwork = await Catalogue.findById(req.params.artworkId);
    const image = artwork.images[req.params.imageIndex];
    res.set('Content-Type', image.contentType);
    res.send(image.data);
  } catch (error) {
    res.status(404).send('Image not found');
  }
});

module.exports = router;