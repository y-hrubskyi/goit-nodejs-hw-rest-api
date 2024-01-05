const path = require("node:path");
const multer = require("multer");

const uploadsDir = path.join(__dirname, "../tmp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1048576,
  },
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype.includes("image"));
  },
});

module.exports = upload;
