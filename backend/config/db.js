const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const mongoStatus = {
  isConnected: false
};

async function connectDB() {
  try {
    const uri = MONGO_URI || "mongodb+srv://algomentor01_db_user:BlZItSJvyecUhME1@cluster0.p1hvkia.mongodb.net/?appName=Cluster0";
    await mongoose.connect(uri);
    mongoStatus.isConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    mongoStatus.isConnected = false;
    console.error('MongoDB connection error:', err);
  }
}

module.exports = { connectDB, mongoStatus };

