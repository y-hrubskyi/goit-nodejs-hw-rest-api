const mongoose = require("mongoose");

const app = require("./app");

const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
