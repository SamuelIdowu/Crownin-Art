const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const catalogueRoutes = require('./routes/catalogueRoutes');
const listingRoutes = require('./routes/listingRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const exhibitionRoutes = require('./routes/exhibitionRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'models')));
app.use(express.static(path.join(__dirname, 'templates')));
app.use(morgan('dev')); // Logging middleware

// Routes
app.use("/", require("./routes/routes"));
app.use("/admin", adminRoutes);
app.use("/contact", require("./routes/contactRoutes"));
app.use("/newsletter", require("./routes/newsletterRoutes"));
app.use('/artwork-post', catalogueRoutes);
// app.use('/listings', listingRoutes);
app.use('/send-artwork', listingRoutes);
app.use('/post-to-gallery', galleryRoutes);
app.use('/post-to-exhibitions', exhibitionRoutes);
// app.use('/success', adminRoutes);
// app.use('/failure', adminRoutes);


// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { message: "Something went wrong!" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  // console.log(/image/art._id/0);
});
