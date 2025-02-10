// routes/catalogueRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadConfig');
const { processCatalogueData } = require('../controllers/catalogueController');

router.post('/', upload.catalogueUpload, processCatalogueData);

module.exports = router;