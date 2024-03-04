require("dotenv").config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  SENDGRID_SENDER_EMAIL: process.env.SENDGRID_SENDER_EMAIL,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  BACKEND_URL: process.env.BACKEND_URL,
};
