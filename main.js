const path = require("node:path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");
const { connectDB, startServer } = require("./config");
const { urlNotFound } = require("./middlewares");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);

app.use(urlNotFound);

app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

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
