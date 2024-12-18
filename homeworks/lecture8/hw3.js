/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./hw3Views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/home.html", (req, res) => {
  if (!req.query) {
    res.render("homeHtml");
  } else {
    if (Object.keys(req.query).length === 0) {
      res.render("homeHtml");
    } else {
      res.render("homeHtml", { query: req.query });
    }
  }
});

router.post("/create-post", (req, res) => {
  const body = req.body;
  const parsedBody = Object.keys(body)
    .map((key) => `${key}=${body[key]}`)
    .join("&");
  console.log(parsedBody);
  res.redirect(`/home.html?${parsedBody}`);
});

app.use("/", router);

app.use("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});