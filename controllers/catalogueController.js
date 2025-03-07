// controllers/catalogueController.js
const Catalogue = require("../models/catalogue");

exports.processCatalogueData = async (req, res) => {
  try {
    const artworkData = {
      artist: req.body.catalogueArtistName,
      title: req.body.catalogueTitle,
      creationDate: new Date(req.body.catalogueDate),
      medium: req.body.catalogueMedium,
      dimensions: req.body.catalogueDim,
      description: req.body.catalogueDescription,
      images: req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
        originalName: file.originalname,
      })),
      metadata: {
        ipAddress: req.ip,
        lastModified: Date.now(),
      },
    };

    const newArtwork = new Catalogue(artworkData);
    await newArtwork.save();
  
    console.log("Catalogue submission succesful");
    res.redirect("/impact/success");
  } catch (err) {
    console.error("Catalogue submission error:", err);
    res.redirect("/impact/failure");
  }
};