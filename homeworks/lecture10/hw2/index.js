const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

// Routes
app.use("/", todoRoutes);

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(process.env.MONGO_URI, clientOptions)
  .then(() => {
    return mongoose.connection.db.admin().command({ ping: 1 });
  })
  .then(() => {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
