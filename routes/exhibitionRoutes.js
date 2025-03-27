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


// routes/exhibitionRoutes.js
router.get('/video/:exhibitionId/:videoIndex', async (req, res) => {
  try {
    const exhibition = await Exhibition.findById(req.params.exhibitionId);
    const video = exhibition.videos[req.params.videoIndex];
    
    res.set('Content-Type', video.contentType);
    res.send(video.data);
  } catch (error) {
    res.status(404).send('Video not found');
  }
});

module.exports = router;