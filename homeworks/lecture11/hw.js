const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key";

mongoose.connect("mongodb://localhost:27017/companyEmployeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
  },
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
});

const Employee = mongoose.model("Employee", EmployeeSchema);
const Company = mongoose.model("Company", CompanySchema);

const app = express();
app.use(bodyParser.json());

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = user;
    next();
  });
}

app.post("/api/login", async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, company: user.company },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find().populate("manager company");
    if (!req.user) {
      const publicEmployees = employees.map((emp) => ({
        firstName: emp.firstName,
        lastName: emp.lastName,
      }));
      return res.json(publicEmployees);
    }

    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/companies/:id/employees", authenticateToken, async (req, res) => {
  try {
    if (req.params.id !== req.user.company.toString()) {
      return res.status(403).json({ error: "Access denied" });
    }

    const company = await Company.findById(req.params.id).populate("employees");
    if (!company) return res.status(404).json({ error: "Company not found" });

    res.json(company.employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
