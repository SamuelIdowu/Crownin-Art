// models/Exhibition.js
const mongoose = require('mongoose');

const exhibitionSchema = new mongoose.Schema({
  video: {
    data: Buffer,
    contentType: String,
    originalName: String,
    duration: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  metadata: {
    submittedAt: {
      type: Date,
      default: Date.now
    },
    ipAddress: String,
    views: {
      type: Number,
      default: 0
    }
  }
});

module.exports = mongoose.model('Exhibition', exhibitionSchema);