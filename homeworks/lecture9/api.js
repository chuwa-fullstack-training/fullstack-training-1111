const mongoose = require('./hw1');
const { Company, Employee } = require('./schema');

// const employee = new Employee({
//     firstName: 'Philip',
//     lastName: 'Chen',
//     company: 'Chuwa',
//     startDate: new Date('2024-11-11'),
//     jobTitle: 'Contractor',
//     resigned: false,
//     salary: 33
// })

const createEmployee = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            company,
            startDate,
            jobTitle,
            resigned,
            salary
        } = req.body;
        // Check if the given company name exists in Companies
        const companyIndex = await Company.findOne({ name: company });
        if (!companyIndex) {
            return res.status(404).json({ message: `Company ${company} not found` });
        }

        const employee = new Employee({
            firstName,
            lastName,
            company: companyIndex.id,
            startDate,
            jobTitle,
            resigned,
            salary
        });
        await employee.save();
        companyIndex.employees.push(employee._id);
        await companyIndex.save();

        res.status(201).json({ message: 'Employee created', employee });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error'});
    }
};

const createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'Company created', company });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);

        company.name = req.body.name ?? company.name;
        company.description = req.body.description ?? company.description;
        company.headquarters = req.body.headquarters ?? company.headquarters;
        company.industry = req.body.industry ?? company.industry;

        await company.save();
        res.status(202).json({ message: 'Company updated successfully', company});
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};

const updateEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);

        employee.firstName = req.body.firstName ?? employee.firstName;
        employee.lastName = req.body.lastName ?? employee.lastName;
        employee.startDate = req.body.startDate ?? employee.startDate;
        employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
        employee.resigned = req.body.resigned ?? employee.resigned;
        employee.salary = req.body.salary ?? employee.salary;

        // Check if given updated company name exists and update corresponding companies
        if (req.body.company) {
            const companyIndex = await Company.findOne({ name: req.body.company });
            if (!companyIndex) {
                return res.status(404).json({ message: `Company ${req.body.company} not found` });
            }
            // Remove the employee from the original company
            const originalCompany = await Company.findById(employee.company);
            originalCompany.employees = originalCompany.employees.filter(id => id.toString() !== employee.id);
            await originalCompany.save();

            employee.company = companyIndex.id;
            companyIndex.employees.push(req.params?.id);
            await companyIndex.save();
        }

        await employee.save();
        res.status(202).json({ message: 'Employee updated successfully', employee});
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};

const deleteCompanyById = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params?.id);
        res.status(202).json({ message: 'Company deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteEmployeeById = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(202).json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployeesFromOneCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company.employees);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    createEmployee,
    createCompany,
    getCompanyById,
    getEmployeeById,
    updateCompanyById,
    updateEmployeeById,
    deleteCompanyById,
    deleteEmployeeById,
    getAllCompanies,
    getAllEmployees,
    getAllEmployeesFromOneCompany,
}
