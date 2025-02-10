// controllers/catalogueController.js
const Catalogue = require('../models/catalogue');

exports.processCatalogueData = async (req, res) => {
  try {
    const artworkData = {
      artist: req.body.catalogueArtistName,
      title: req.body.catalogueTitle,
      creationDate: new Date(req.body.catalogueDate),
      medium: req.body.catalogueMedium,
      dimensions: req.body.catalogueDim,
      description: req.body.catalogueDescription,
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

    const newArtwork = new Catalogue(artworkData);
    await newArtwork.save();
    
    res.status(201).json({ 
      success: true,
      message: 'Artwork added to catalogue successfully',
      id: newArtwork._id
    });
  } catch (err) {
    console.error('Catalogue submission error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error occurred while processing artwork'
    });
  }
};