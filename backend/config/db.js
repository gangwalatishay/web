const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  try {
    const uri = MONGO_URI || "mongodb+srv://algomentor01_db_user:BlZItSJvyecUhME1@cluster0.p1hvkia.mongodb.net/?appName=Cluster0";
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

module.exports = { connectDB};

