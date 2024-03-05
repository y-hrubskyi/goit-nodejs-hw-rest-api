const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const contactRoutes = require("./contactRoutes");

const initRoutes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/contacts", contactRoutes);
  app.get("/ping", async (req, res) => {
    res.send({ message: `Pong ${Date.now()}` });
  });
};

module.exports = initRoutes;