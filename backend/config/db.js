const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;


async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://algomentor01_db_user:BlZItSJvyecUhME1@cluster0.p1hvkia.mongodb.net/?appName=Cluster0");
    console.log('MongoDB connected');
  } catch (err) {   console.error('MongoDB connection error:', err);
  }
}

module.exports = { connectDB};

