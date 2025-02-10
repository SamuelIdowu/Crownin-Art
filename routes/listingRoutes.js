// routes/listingRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadConfig');
const { processListingData } = require('../controllers/listingController');

router.post('/', upload.listingUpload, processListingData);

module.exports = router;