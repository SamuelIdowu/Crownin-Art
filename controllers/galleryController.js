// controllers/galleryController.js
const Gallery = require('../models/gallery');

exports.processGalleryData = async (req, res) => {
  try {
    const galleryData = {
      images: req.files.map(file => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname
      })),
      metadata: {
        ipAddress: req.ip
      }
    };

    const newGalleryEntry = new Gallery(galleryData);
    await newGalleryEntry.save();

    res.status(201).json({
      success: true,
      message: 'Gallery entry added successfully',
      id: newGalleryEntry._id
    });
  } catch (err) {
    console.error('Gallery submission error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error occurred while adding gallery entry'
    });
  }
};