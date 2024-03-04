const userRoutes = require("./userRoutes");
const contactRoutes = require("./contactRoutes");

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/contacts", contactRoutes);
};

module.exports = initRoutes;
