const connectDB = require("./db");
const startServer = require("./server");
const { job } = require("./cron");

module.exports = {
  connectDB,
  startServer,
  job,
};
