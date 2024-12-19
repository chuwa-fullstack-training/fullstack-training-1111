Apply RESTful principles to the hw1 in lecture9

const express = require('express');
const mongoose = require('mongoose');

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
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' } // Optional
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

// RESTful API endpoints


app.post('/api/companies', async (req, res) => {
    try {
        const company = new Company(req.body);
        const savedCompany = await company.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/api/companies', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/api/companies/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) return res.status(404).json({ error: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.put('/api/companies/:id', async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) return res.status(404).json({ error: 'Company not found' });
        res.json(updatedCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.delete('/api/companies/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) return res.status(404).json({ error: 'Company not found' });
        await Employee.deleteMany({ company: deletedCompany._id });
        res.json({ message: 'Company and associated employees deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.post('/api/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        if (req.body.company) {
            await Company.findByIdAndUpdate(req.body.company, { $push: { employees: savedEmployee._id } });
        }
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find().populate('manager company');
        res.json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/api/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('manager company');
        if (!employee) return res.status(404).json({ error: 'Employee not found' });
        res.json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.put('/api/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ error: 'Employee not found' });
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.delete('/api/employees/:id', async (req, res) => {
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


app.get('/api/companies/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) return res.status(404).json({ error: 'Company not found' });
        res.json(company.employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});