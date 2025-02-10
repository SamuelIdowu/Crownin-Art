// models/Catalogue.js
const mongoose = require('mongoose');

const catalogueSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, 'Artist name is required'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Artwork title is required'],
    trim: true
  },
  creationDate: {
    type: Date,
    required: [true, 'Creation date is required']
  },
  medium: {
    type: String,
    required: [true, 'Medium is required'],
    trim: true
  },
  dimensions: {
    type: String,
    required: [true, 'Dimensions are required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
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
    lastModified: Date
  }
});

module.exports = mongoose.model('Catalogue', catalogueSchema);