const express = require('express')
const router = express.Router()
const { Company } = require('../schema.js')

router.post('/create-company', async (req, res) => {
    try {
        const companyObj = new Company(req.body);
        const company = await companyObj.save();
        res.status(201).json({ company });
    } catch(err) {
        console.log('Error occured while creating the company')
        res.status(400).json({ error: err.messsage })
    }
})

router.get('/get-company-by-id', async (req, res) => {
    const { companyId } = req.body;
    
    if (companyId){
        try {
            const company = await Company.findById(companyId).select(" -_id -employees" )
            if(!company){
                res.status(404).json({ message: "No company found"})
            }
            res.status(200).json({ company })
        } catch(err){
            console.log('Error occured while creating the company')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing company Id"})
    } 
})

router.put('/update-company-by-id', async (req, res) => {
    const { companyId, ...rest } = req.body
    
    if(companyId){
        try {
            const company = await Company.findoneAndUpdate({ _id: companyId }, rest )
            if(!company){
                res.status(404).json({ message: "No company found"})
            }
            res.status(200).json({ company })
    
        } catch(err) {
            console.log('Error occured while updating the company')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing company Id"})
    }
})

router.delete('/delete-company-by-id', async (req, res) => {
    const { companyId } = req.body;

    if(companyId){
        try {
            const company = await Company.findOneAndDelete({ _id: companyId })
            if(!company){
                res.status(404).json({ message: "No company found"})
            }
            res.status(200).json({ message: "deleted" })
    
        } catch(err) {
            console.log('Error occured while deleting the company')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing company Id"})
    }
})

router.get('/', async (req, res) => {
    try {
        const companies = await Company.find()
        res.status(200).json({ companies })
    } catch(err){
        console.log('Error occured')
        res.status(400).json({ error: err.messsage })
    }
})



module.exports = router;