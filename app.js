const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'models')));

app.get("/", (req, res) => {
    res.render("layouts/home");
});

app.get("/about", (req, res) => {
    res.render("layouts/about");
});

app.get("/contact", (req, res) => {
    res.render("layouts/contact");
});

app.get("/catalogue", (req, res) => {
    res.render("layouts/catalogue");
});

app.get("/listings", (req, res) => {
    res.render("layouts/listings");
});

app.get("/exhibitions", (req, res) => {
    res.render("layouts/exhibitions");
});

app.get("/gallery", (req, res) => {
    res.render("layouts/gallery");
});

app.get("/login", (req, res) => {
    res.render("admin/login");
});

app.get("/admin-page", (req, res) => {
    res.render("admin/admin-page");
});

app.get("/post", (req, res) => {
    res.render("admin/post");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});