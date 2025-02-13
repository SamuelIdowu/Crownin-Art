// controllers/listingController.js
const Listing = require('../models/listing');

exports.processListingData = async (req, res) => {
  try {
    const listingData = {
      artist: req.body.listingArtistName,
      price: parseFloat(req.body.price),
      medium: req.body.listingMedium,
      title: req.body.listingTitle,
      dimensions: req.body.listingDim,
      description: req.body.listingDescription,
      images: req.files.map(file => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname
      })),
      metadata: {
        ipAddress: req.ip,
        lastModified: Date.now()
      }
    };

    const newListing = new Listing(listingData);
    await newListing.save();

    res.status(201).json({
      success: true,
      message: 'Artwork listing created successfully',
      id: newListing._id
    });
  } catch (err) {
    console.error('Listing submission error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error occurred while creating listing'
    });
  }
};