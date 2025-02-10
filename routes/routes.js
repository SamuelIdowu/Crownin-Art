const express = require("express");
const router = express.Router();

// Home Page
router.get("/", (req, res) => {
  res.render("layouts/home");
});

// About Page
router.get("/about", (req, res) => {
  res.render("layouts/about");
});

// Catalogue Page
router.get("/catalogue", (req, res) => {
  res.render("layouts/catalogue");
});

// Listings Page
router.get("/listings", (req, res) => {
  res.render("layouts/listings");
});

// Exhibitions Page
router.get("/exhibitions", (req, res) => {
  res.render("layouts/exhibitions");
});

// Gallery Page
router.get("/gallery", (req, res) => {
  res.render("layouts/gallery");
});

module.exports = router;