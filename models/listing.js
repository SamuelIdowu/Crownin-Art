// models/Listing.js
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, 'Artist name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  listingDate: {
    type: Date,
    default: Date.now
  },
  medium: {
    type: String,
    required: [true, 'Medium is required'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Artwork title is required'],
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
    status: {
      type: String,
      enum: ['active', 'sold', 'archived'],
      default: 'active'
    }
  }
});

module.exports = mongoose.model('Listing', listingSchema);