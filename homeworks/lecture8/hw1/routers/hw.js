const express = require("express");
const router = express.Router();

const hwController = require("../controllers/hw");
router.get("*", hwController.getprintFilesByExtension);

module.exports = router;
