// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongouri = "mongodb://localhost:27017/crownin"

const connectDB = async () => {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};


module.exports = connectDB;