/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/home.html", (req, res) => {
  const queryData = req.query;

  res.render("home", { queryData });
});

// Handle form submission
app.post("/create-post", (req, res) => {
  const formData = req.body;
  const queryString = new URLSearchParams(formData).toString();
  res.redirect(`/home.html?${queryString}`);
});

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.use((req, res) => {
  res.status(404).send("This is the 404 page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
