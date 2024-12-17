const express = require("express");
const app = express();
const port = 3000;

const router = require("./router");
app.use("/hw2", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
