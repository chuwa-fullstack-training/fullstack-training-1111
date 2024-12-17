const express = require("express");
const router = express.Router();
const queryController = require("./controller");

router.get("/", queryController.getMockData);

module.exports = router;
