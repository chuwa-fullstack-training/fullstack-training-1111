const mongoose = require('mongoose');
const express = require('express');
const Company = require('./models/Company');
const Employee = require('./models/Employee');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const port = 3000;

const createCompany = async (req, res) => {
	try {
		const company = new Company(req.body);
		await company.save();
		res.status(201).json({ message: 'Company created' });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: 'Server Error' });
	}
};

const createEmployee = async (req, res) => {
	try {
		const employee = new Employee(req.body);
		await employee.save();
		const company = await Company.findById(req.body.company);
		company.employees.push(employee._id);
		await company.save();
		res.status(201).json({ message: 'Employee created' });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ message: 'Server Error' });
	}
};

const getCompany = async (req, res) => {
	try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getEmployee = async (req, res) => {
	try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const modifyCompany = async (req, res) => {
	try {
    const company = await Company.findById(req.params?.id);
    company.name = req.body.name ?? company.name;
    company.description = req.body.description ?? company.description;
    company.headquarters = req.body.headquarters ?? company.headquarters;
		company.headquarters = req.body.headquarters ?? company.headquarters;
		company.employees = req.body.employees ?? company.employees;
    await company.save();
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const modifyEmployee = async (req, res) => {
	try {
    const employee = await Employee.findById(req.params?.id);
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.description ?? employee.lastName;
    employee.startDate = req.body.headquarters ?? employee.startDate;
		employee.company = req.body.headquarters ?? employee.company;
		employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
		employee.resigned = req.body.resigned ?? employee.resigned;
		employee.salary = req.body.salary ?? employee.salary;
    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
	try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
	try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllCompanies = async (req, res) => {
	try {
    const company = await Company.find({});
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployees = async (req, res) => {
	try {
    const employee = await Employee.find({});
    if (!req.id) {
      const notloggedin = employee.map((emp) => {
        return {firstName: emp.firstName, lastName: emp.lastName}
    });
      res.status(200).json(notloggedin);
    } else {
      res.status(200).json(employee);
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllCompanyEmployees = async (req, res) => {
	try {
    const company = await Company.findById(req.params?.company);
    if (req.id) {
      const employee = await Employee.findById(req.id);
      if (employee && employee.company.toString() === company._id.toString()) {
        res.status(200).json(company.employees);
      } else {
        res.status(500).json({ message: 'Not Logged In' });
      }
    } else {
      res.status(500).json({ message: 'Not Logged In' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const login = async (req, res) => {
  const user = await Employee.findOne({firstName: req.body?.firstName, lastName: req.body?.lastName});
  if (user) {
    const payload = {
      username: req.body?.firstName,
      password: req.body?.lastName,
      id: user._id
    };
    try {
      const token = await jwt.sign(payload, "xyz", {
        expiresIn: '30d'
      });
      res.status(200).json(token);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(500).json({ message: 'Invalid Login' });
  }
};

const loggedin = async (req, res, next) => {
  const token = req.header('x-auth-token') || req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  if (token) {
    try {
      const decoded = await jwt.verify(token, "xyz");
      req.id = decoded.id;
    } catch (err) {
      console.log(err);
    }
  }
  next();
}

mongoose
  .connect('mongodb://127.0.0.1:27017/hw9')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.post('/createCompany', createCompany);
app.post('/createEmployee', createEmployee);
app.get('/companies/:id', getCompany);
app.get('/employees/:id', getEmployee);
app.post('/modifyCompany/:id', modifyCompany);
app.post('/modifyEmployee/:id', modifyEmployee);
app.delete('/companies/:id', deleteCompany);
app.delete('/employees/:id', deleteEmployee);
app.get('/companies', getAllCompanies);
app.get('/employees', loggedin, getAllEmployees);
app.get('/allEmployees/:company', loggedin, getAllCompanyEmployees);
app.post('/api/login', login);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});