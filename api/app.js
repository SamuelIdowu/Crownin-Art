const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("../utils/db");

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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(morgan("dev"));

//Routes
app.use("/", mainRoutes);

app.use("/admin", adminRoutes);
app.use("/contact", contactRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/gallery", galleryRoutes);
app.use("/catalogue", catalogueRoutes);
app.use("/listings", listingRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { message: "Something went wrong!" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
