const { Router } = require("express");

const router = Router();

router.get("/ping", (req, res) => {
  res.send({ message: `Pong ${Date.now()}` });
});

module.exports = router;
