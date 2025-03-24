const express = require("express");
const router = express.Router();
const Catalogue = require("../models/catalogue");
const Listing = require("../models/listing");
const Exhibition = require("../models/exhibition");
const Gallery = require("../models/gallery");

// Home Page
router.get("/", (req, res) => {
  res.render("layouts/home");
});

// About Page
router.get("/about", (req, res) => {
  res.render("layouts/about");
});

// Catalogue Page
router.get("/catalogue", async (req, res) => {
  try {
    const catalogues = await Catalogue.find();
    res.render("layouts/catalogue", { catalogues });
  } catch (err) {
    console.error("Error fetching catalogues:", err);
    res.status(500).send("Server Error");
  }
});

// // API endpoint to fetch listings
// router.get("/api/catalogue", async (req, res) => {
//   try {
//     const catalogues = await Catalogue.find();
//     res.json(catalogues);
//   } catch (err) {
//     console.error("Error fetching catalogue:", err);
//     res.status(500).send("Server Error");
//   }
// });

// Listings Page
router.get("/listings", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.render("layouts/listings", { listings });
  } catch (err) {
    console.error("Error fetching listings:", err);
    res.status(500).send("Server Error");
  }
});

// // API endpoint to fetch listings
// router.get("/api/listings", async (req, res) => {
//   try {
//     const listings = await Listing.find();
//     res.json(listings);
//   } catch (err) {
//     console.error("Error fetching listings:", err);
//     res.status(500).send("Server Error");
//   }
// });

// Delete routes
router.delete("/api/listings/:id", async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete listing" });
  }
});

router.delete("/api/catalogue/:id", async (req, res) => {
  try {
    await Catalogue.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete catalogue item" });
  }
});

router.delete("/api/exhibition/:id", async (req, res) => {
  try {
    await Exhibition.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete exhibition item" });
  }
});

router.delete("/api/gallery/:id", async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete gallery item" });
  }
});

// Exhibitions Page
router.get("/exhibitions", async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();
    res.render("layouts/exhibitions", { exhibitions });
  } catch (err) {
    console.error("Error fetching exhibitions:", err);
    res.status(500).send("Server Error");
  }
});

// API endpoint to fetch exhibitions
router.get("/api/exhibitions", async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();
    res.json(exhibitions);
  } catch (err) {
    console.error("Error fetching exhibitions:", err);
    res.status(500).send("Server Error");
  }
});

// Gallery Page
router.get("/gallery", async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.render("layouts/gallery", { galleryItems });
  } catch (err) {
    console.error("Error fetching gallery items:", err);
    res.status(500).send("Server Error");
  }
});

// API endpoint to fetch gallery items
router.get("/api/gallery", async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.json(galleryItems);
  } catch (err) {
    console.error("Error fetching gallery items:", err);
    res.status(500).send("Server Error");
  }
});

router.get("/post", (req, res) => {
  res.render("admin/post");
});

router.get("/admin-page", async (req, res) => {
  try {
    const [listings, exhibitions, gallery, catalogues] = await Promise.all([
      Listing.find(),
      Exhibition.find(),
      Gallery.find(),
      Catalogue.find(),
    ]);

    res.render("admin/admin-page", {
      listings: listings.map((l) => l.toJSON()),
      exhibitions: exhibitions.map((e) => e.toJSON()),
      gallery: gallery.map((g) => g.toJSON()),
      catalogues: catalogues.map((c) => c.toJSON()),
    });
  } catch (error) {
    console.error("Admin data fetch error:", error);
    res.status(500).send("Server Error");
  }
});

// Success Page
router.get("/impact/success", (req, res) => {
  res.render("impact/success");
});

// Failure Page
router.get("/impact/failure", (req, res) => {
  res.render("impact/failure");
});

router.get("/login", (req, res) => {
  res.render("admin/login");
});

module.exports = router;
