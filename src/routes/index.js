const cronRoutes = require("./cronRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const contactRoutes = require("./contactRoutes");

const initRoutes = (app) => {
  app.use("/cron", cronRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/contacts", contactRoutes);
};

module.exports = initRoutes;
