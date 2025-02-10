// controllers/exhibitionController.js
const Exhibition = require('../models/Exhibition');

exports.processExhibitionData = async (req, res) => {
  try {
    const exhibitionData = {
      video: {
        data: req.files[0].buffer,
        contentType: req.files[0].mimetype,
        originalName: req.files[0].originalname
      },
      description: req.body.exhibitionDescription,
      metadata: {
        ipAddress: req.ip
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