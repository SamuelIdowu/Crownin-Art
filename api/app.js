const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("../utils/db");

// Explicitly load the .env file from the root directory
dotenv.config({ path: path.join(__dirname, "../.env") });

// Import routes
const catalogueRoutes = require("../routes/catalogueRoutes");
const listingRoutes = require("../routes/listingRoutes");
const galleryRoutes = require("../routes/galleryRoutes");
const exhibitionRoutes = require("../routes/exhibitionRoutes");
const adminRoutes = require("../routes/adminRoutes");
const contactRoutes = require("../routes/contactRoutes");
const newsletterRoutes = require("../routes/newsletterRoutes");
const mainRoutes = require("../routes/routes");

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('../public'));
// app.use(express.static(path.join(__dirname, '../models')));
app.use(morgan('dev')); // Logging middleware


//Routes
app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/contact", contactRoutes);
app.use("/newsletter", newsletterRoutes);
// app.use('/artwork-post', catalogueRoutes);
app.use('/gallery', galleryRoutes);
app.use('/catalogue', catalogueRoutes);
app.use('/listings', listingRoutes);
// app.use('/send-artwork', listingRoutes);
// app.use('/post-to-gallery', galleryRoutes);
// app.use('/post-to-exhibitions', exhibitionRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { message: "Something went wrong!" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
