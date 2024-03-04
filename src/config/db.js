const mongoose = require("mongoose");

const { MONGODB_URI } = require("./env");

const connectDB = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("Successfully connected to the database");
};

module.exports = connectDB;
