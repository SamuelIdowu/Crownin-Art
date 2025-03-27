// controllers/galleryController.js
const Gallery = require("../models/gallery");

exports.processGalleryData = async (req, res) => {
  try {
    const galleryData = {
      images: req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname,
      })),
      metadata: {
        ipAddress: req.ip,
        galleryPosition: req.body.position || 0
      },
    };

    const newGalleryEntry = new Gallery(galleryData);
    await newGalleryEntry.save();

    console.log("Gallery submission successful");
    res.redirect("/impact/success");
  } catch (err) {
    console.error("Gallery submission error:", err);
    res.redirect("/impact/failure");
  }
};
