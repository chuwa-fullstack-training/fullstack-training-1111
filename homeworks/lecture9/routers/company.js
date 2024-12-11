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

module.exports = router;