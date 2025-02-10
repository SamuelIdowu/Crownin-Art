// models/Gallery.js
const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  images: [{
    data: Buffer,
    contentType: String,
    originalName: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  metadata: {
    submittedAt: {
      type: Date,
      default: Date.now
    },
    ipAddress: String,
    galleryPosition: Number
  }
});

module.exports = mongoose.model('Gallery', gallerySchema);