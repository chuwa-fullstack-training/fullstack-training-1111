const {Employee, Company} = require("../schema");

exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();

        if(employee.company) {
            await Company.findByIdAndUpdate(employee.company, {

                $push: { employees: employee._id }
            });
        }
        res.status(201).send(employee);
    } catch(err) {
        res.status(400).send(err);
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate("manager company");
        if(!employee) return res.status(404).send('Employee not Found');
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!employee) return res.status(404).send('Employee not Found');
        res.send(employee);
    } catch(err) {
        res.status(400).send(err);
    }
};

exports.deleteEmployee = async (req, res) => {
    try{
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!employee) return res.status(404).send('Employee not Found');

        if(employee.company) {
            await Company.findByIdAndUpdate(employee.company, {

                $pull: {employees: employee._id}
            });
        }
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAllEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        res.send(employees);
    } catch(err) {
        res.status(500).send(err);
    }
};
