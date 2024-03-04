const path = require("node:path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { connectDB, startServer } = require("./config");
const { urlNotFound, errorHandler } = require("./middlewares");
const initRoutes = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

initRoutes(app);

app.use(urlNotFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    startServer(app);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
