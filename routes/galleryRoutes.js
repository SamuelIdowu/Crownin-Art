// routes/galleryRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadConfig');
const { processGalleryData } = require('../controllers/galleryController');

router.post('/', upload.galleryUpload, processGalleryData);

module.exports = router;