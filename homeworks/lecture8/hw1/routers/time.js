const express = require("express");
const router = express.Router();
const timeController = require("../controllers/time");

router.get("/parsetime", timeController.getParseTime);
router.get("/unixtime", timeController.getUnixTime);

module.exports = router;
