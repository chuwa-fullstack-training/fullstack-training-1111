const {Employee, Company} = require("../schema");

exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).send(company);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if(!company) return res.status(404).send('Company not Found');
        res.send(company);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getCompanyEmployees = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if(!company) return res.status(404).send('Company not Found');
        res.send(company.employees);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.updateCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!company) return res.status(404).send('Company not Found');
        res.send(company);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteCompany = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) return res.status(404).send('Company not Found');
        await Employee.updateMany({ company: req.params.id }, { $unset: { company: '' } });
        res.send(company);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.send(companies);
    } catch(err) {
        res.status(500).send(err);
    }
};
