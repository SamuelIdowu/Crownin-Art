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

router.get("/post", (req, res) => {
  res.render("admin/post");
});

router.get("/admin-page", (req, res) => {
  res.render("admin/admin-page");
});


router.get("/login", (req, res) => {
  res.render("admin/login");
});


module.exports = router;