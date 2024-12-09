const express = require("express");
const companyRouter = require("./routes/company-router");
const employeeRouter = require("./routes/employee-router");
const connectDB = require("./db");
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/companies", companyRouter);
app.use("/api/employees", employeeRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
