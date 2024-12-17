const express = require("express");
const app = express();
const port = 3000;

const timeRouter = require("./routers/time");
const hwRouter = require("./routers/hw");

app.use("/api", timeRouter);
app.use("/", hwRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
