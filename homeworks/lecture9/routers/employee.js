const express = require('express')
const router = express.Router()
const { Employee } = require('../schema')

router.post('/create-employee', async (req, res) => {
    try {
        const employeeObj = new Employee(req.body)
        const employee = await employeeObj.save()
        res.status(200).json({ employee })

    } catch(err){
        console.log(err.message)
        res.status(401).json({ message: "Error occured while creating this employee"})
    }
})

module.exports = router