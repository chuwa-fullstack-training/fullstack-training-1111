import Company from '../models/compamyDB.js';

export const createCompany = async (req, res) => {
    try {
        console.log('create company')
        const company = new Company(req.body);
        await company.save();
        res.status(200).json(company);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id);
        if(!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company);
    }catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateCompany = async (req, res) => {
    try {
        // find the user
        const company = await Company.findById(req.params?.id);
    
        // update the user
        company.name = req.body.name ?? company.name;
        company.description = req.body.description ?? company.description;
        company.headquarters = req.body.headquarters ?? company.headquarters;
        company.industry = req.body.industry ?? company.industry;
        company.employees = req.body.employees?? company.employees;
        // save the user
        await company.save();
        res.status(200).json(company);
      } catch (err) {
        res.status(500).json({ message: 'Server Error' });
      }
};

export const deleteCompany = async (req, res) => {
    try {
        // find the user and remove it
        await Company.findByIdAndRemove(req.params?.id);
        res.status(200).json({ message: 'Company deleted' });
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
      }
};

export const getAllCompany = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getAllEmployee = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        if(!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company.employees);
    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

