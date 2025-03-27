// controllers/exhibitionController.js
const Exhibition = require("../models/exhibition");

exports.processExhibitionData = async (req, res) => {
  try {
    console.log("Processing exhibition data");
    const exhibitionData = {
      description: req.body.exhibitionDescription,
      videos: req.files.map(file => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname
      })),
      metadata: {
        ipAddress: req.ip,
        lastModified: Date.now(),
      },
    };

    const newExhibition = new Exhibition(exhibitionData);
    await newExhibition.save();

  console.log("Exhibition submission successful");
    res.redirect("/impact/success");
  } catch (err) {
    console.error("Exhibition submission error:", err);
    res.redirect("/impact/failure");
  }
};
