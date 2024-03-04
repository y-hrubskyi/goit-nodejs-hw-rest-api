const { PORT } = require("./env");

const startServer = (app) => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

module.exports = startServer;
