Based on hw1 in lecture 9, you are required to implement authentication and authorization for the APIs.

1. Create a new API for login

   - `/api/login`, returning JWT token for authentication and authorization
   - you can use `firstName` as username and `lastName` as password or any other combination that make sense to you

2. Modify existing APIs to accomodate authentication and authorization as following:
   - only logged-in user can have access to get all information from employees, e.g.: logged-in user can retrieve all the fields of employees, while the anonymous can only get `firstName` and `lastName`
   - only logged-in user can have access to get all employees of it's own company, e.g.: employees with company A have access to get employees of company A, ONLY

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/employee_company_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    startDate: { type: Date, required: true },
    jobTitle: { type: String, required: true },
    resigned: { type: Boolean, default: false },
    salary: { type: Number, required: true },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }, // Optional
    password: { type: String, required: true } // For authentication
});

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    headquarters: { type: String },
    industry: { type: String },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);


const JWT_SECRET = 'secret';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

app.post('/api/login', async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        const user = await Employee.findOne({ firstName, lastName });
        if (!user) return res.status(400).json({ error: 'Invalid username or password.' });

        const token = jwt.sign({ id: user._id, company: user.company }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/employees', authenticate, async (req, res) => {
    try {
        const employees = await Employee.find().populate('manager company');

        if (req.user) {
            res.json(employees);
        } else {
            const minimalEmployees = employees.map(emp => ({ firstName: emp.firstName, lastName: emp.lastName }));
            res.json(minimalEmployees);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/companies/:id/employees', authenticate, async (req, res) => {
    try {
        if (!req.user || req.user.company.toString() !== req.params.id) {
            return res.status(403).json({ error: 'Access denied to this company's employees.' });
        }

        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) return res.status(404).json({ error: 'Company not found' });

        res.json(company.employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.post('/companies', async (req, res) => {
    try {
        const company = new Company(req.body);
        const savedCompany = await company.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.post('/employees', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const employee = new Employee({ ...req.body, password: hashedPassword });
        const savedEmployee = await employee.save();
        if (req.body.company) {
            await Company.findByIdAndUpdate(req.body.company, { $push: { employees: savedEmployee._id } });
        }
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/companies/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) return res.status(404).json({ error: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('manager company');
        if (!employee) return res.status(404).json({ error: 'Employee not found' });
        res.json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.put('/companies/:id', async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) return res.status(404).json({ error: 'Company not found' });
        res.json(updatedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.put('/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ error: 'Employee not found' });
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/companies/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) return res.status(404).json({ error: 'Company not found' });
        await Employee.deleteMany({ company: deletedCompany._id });
        res.json({ message: 'Company and associated employees deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.delete('/employees/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) return res.status(404).json({ error: 'Employee not found' });
        if (deletedEmployee.company) {
            await Company.findByIdAndUpdate(deletedEmployee.company, { $pull: { employees: deletedEmployee._id } });
        }
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT
