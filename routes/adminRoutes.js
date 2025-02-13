const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// // Login Page (GET)
// router.get("/login", (req, res) => {
//   res.render("admin/login");
// });

// Login Page (POST)
router.post(
  "/login",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("admin/login", { errors: errors.array() });
    }

    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
      res.redirect("/admin/admin-page");
      console.log("Login Successful");
    } else {
      res.redirect("/admin/login");
      console.log("Login Failed");
    }
  }
);

// // Admin Dashboard
// router.get("/admin-page", (req, res) => {
//   res.render("admin/admin-page");
// });

// Post Artwork Page
router.get("/post", (req, res) => {
  res.render("admin/post");
});

// Submit Artwork
router.post("/send-artwork", (req, res) => {
  const { artistName, price, date, medium, title, dim, artworkDescription } = req.body;
  console.log(artistName, price, date, medium, title, dim, artworkDescription);
  res.redirect("/admin/post");
});

module.exports = router;