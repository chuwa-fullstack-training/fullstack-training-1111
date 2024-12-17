const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const companyRoutes = require("./routes/company");
const employeeRoutes = require("./routes/employee");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/login", authRoutes);
app.use("/companies", companyRoutes);
app.use("/employees", employeeRoutes);

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
