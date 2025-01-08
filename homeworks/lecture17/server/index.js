const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo-router");
const connectDB = require("./db");
const app = express();

app.use(cors());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/todos", todoRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
