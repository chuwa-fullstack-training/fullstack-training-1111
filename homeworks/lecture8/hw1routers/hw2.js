const express = require("express");
const router = express.Router();
const url = require("url");

const sendJsonResponse = (res, statusCode, response) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(response));
};

router.get("/hw2/api/parsetime", (req, res) => {
  try {
    const { iso } = req.query;
    if (!iso) {
      sendJsonResponse(res, 400, { error: "Missing iso query parameter" });
    } else {
      const date = new Date(iso);
      const response = {
        hour: date.getUTCHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
      sendJsonResponse(res, 200, response);
    }
  } catch (err) {
    sendJsonResponse(req, 404, "Not Found");
  }
});

router.get("/hw2/api/unixtime", (req, res) => {
  try {
    const { iso } = req.query;
    if (!iso) {
      sendJsonResponse(res, 400, { error: "Missing iso query parameter" });
    } else {
      const date = new Date(iso);
      const response = {
        unixtime: date.getTime(),
      };
      sendJsonResponse(res, 200, response);
    }
  } catch (err) {
    sendJsonResponse(req, 404, "Not Found");
  }
});

module.exports = router;