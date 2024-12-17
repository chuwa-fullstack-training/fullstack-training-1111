const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public", { index: "home.html" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit", (req, res) => {
  const { user, email } = req.body;

  res.redirect(
    `/home.html?user=${encodeURIComponent(user)}&email=${encodeURIComponent(
      email
    )}`
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
