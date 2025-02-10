// routes/exhibitionRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadConfig');
const { processExhibitionData } = require('../controllers/exhibitionController');

router.post('/', upload.exhibitionUpload, processExhibitionData);

module.exports = router;