// middleware/uploadConfig.js
const multer = require('multer');
const storage = multer.memoryStorage();

module.exports = {
    catalogueUpload: multer({ storage }).array('catalogueImage'),
    listingUpload: multer({ storage }).array('listingImage'),
    galleryUpload: multer({ storage }).array('galleryImage'),
    exhibitionUpload: multer({ storage }).array('exhibitionVideo')
};