const { Router } = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

const router = Router();

router.use("/", swaggerUi.serve);

router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;
