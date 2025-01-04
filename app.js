const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const nodemailer = require("nodemailer")

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

app.post('/artwork-post', (req, res) => {
    const { ArtistName, price, date, medium, title, dim, artworkDescription } = req.body;
  
    res.send('Form submitted successfully!');
});
app.post('/gallery-post')


//contact form submisstion
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL/TLS
      service: "Gmail",
      auth: {
        user: 'samuelidowu689@gmail.com',
        pass: 'luwnqoxqnzzzpypz',
      },
    });
    
  
    // Define email options
    const mailOptions = {
      from: email,
      to: 'thenasis2@gmail.com',
      subject: 'New message from your website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.redirect("/contact");
        alert("Error Sending Message, Please Retry");
      } else {
        alert("Message Sent Thank You");
        console.log('Email sent: ' + info.response);
        res.redirect("/contact");
      }
    });
  });



  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});