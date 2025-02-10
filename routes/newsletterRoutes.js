const express = require("express");
const router = express.Router();
const { addSubscriber } = require("../utils/googleSheets");

// Newsletter Subscription Route
router.post("/subscribe", async (req, res) => {
  const { newsletterEmail } = req.body;

  if (!newsletterEmail) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Add subscriber to Google Sheet
    await addSubscriber(newsletterEmail);
    res.status(200).json({ message: "Subscribed successfully!" });
    
  } catch (error) {
    console.error("Error adding subscriber:", error);
    res.status(500).json({ message: "Failed to subscribe" });

  }
  
});

module.exports = router;