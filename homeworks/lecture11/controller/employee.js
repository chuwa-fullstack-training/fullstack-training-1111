import Employee from '../models/employeeDB.js';
import Company from '../models/compamyDB.js';


export const createEmployee = async (req, res) => {
    try{
        const newEmployee = new Employee(req.body);
        if (!newEmployee.firstName || !newEmployee.lastName ){
            return res.status(400).json({ message: 'Please include a first name and last name' });
        }
        await newEmployee.save();

        await Company.findByIdAndUpdate(
            newEmployee.company, 
            { $push: { employees: newEmployee._id } }  // Add the employee's _id to the company's employees array
        );
        res.status(201).json(newEmployee);
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' }
    )}
};

export const getEmployee = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params?.id);
        if(!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateEmployee = async (req, res) => {
    try{
        const employee = await Employee.findById(req.params?.id);
        if (employee) {console.log('find employee', employee)}
        if(!employee) return res.status(404).json({ message: 'Employee not found' });

        employee.firstName = req.body.firstName?? employee.firstName;
        employee.lastName = req.body.lastName?? employee.lastName;
        employee.company = req.body.company?? employee.company;
        employee.startDate = req.body.startDate?? employee.startDate;
        employee.jobTitle = req.body.jobTitle?? employee.jobTitle;
        employee.resigned = req.body.resigned?? employee.resigned;
        employee.salary = req.body.salary?? employee.salary;
        employee._manager = req.body._manager?? employee._manager;

        await employee.save();

        res.status(200).json(employee);
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    };
};

export const deleteEmployee = async (req, res) => {
    try{
        const employee = await Employee.findByIdAndDelete(req.params?.id);
        if(!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted' });
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getAllEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        if (req.employee){
            return res.status(200).json(employees);
            
        }

        else{
            const limitedEmployees = employees.map(({ firstName, lastName }) => ({
                firstName,
                lastName,
              }));
            return res.status(200).json(limitedEmployees);
        }
        
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};


export const getEmployeeByCompany = async (req, res) => {
    if (!req.employee) return res.status(404).json({ message: 'you have to log in to view the information' });

    try{
        const employees = await Employee.find({ company: req.employee?.company });
        if(!employees) return res.status(404).json({ message: 'No employees found in this company' });
        res.status(200).json(employees);
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};