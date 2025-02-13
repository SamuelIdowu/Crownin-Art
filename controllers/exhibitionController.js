// controllers/exhibitionController.js
const Exhibition = require('../models/exhibition');

exports.processExhibitionData = async (req, res) => {
  try {
    console.log('Processing exhibition data');
    const exhibitionData = {
      description: req.body.exhibitionDescription,
      videos: req.files.map(file => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname
      })),
      metadata: {
        ipAddress: req.ip,
        lastModified: Date.now()
      }
    };

    const newExhibition = new Exhibition(exhibitionData);
    await newExhibition.save();

    res.status(201).json({
      success: true,
      message: 'Exhibition video uploaded successfully',
      id: newExhibition._id
    });
  } catch (err) {
    console.error('Exhibition submission error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error occurred while processing exhibition'
    });
  }
};