const url = require("url");

module.exports = {
  getParseTime: (req, res) => {
    try {
      const { query } = url.parse(req.url, true);
      const date = new Date(query.iso);
      const response = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response));
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  },
  getUnixTime: (req, res) => {
    try {
      const { query } = url.parse(req.url, true);
      const unixtime = Date.parse(query.iso);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ unixtime }));
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  },
};
