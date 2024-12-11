const express = require('express')
const router = express.Router()
const { Employee, Company } = require('../schema')

router.post('/create-employee', async (req, res) => {
    try {
        const employeeObj = new Employee(req.body)
        const employee = await employeeObj.save()
        await Company.findOneAndUpdate({ _id: employee.company }, { $push: { 'employees': employee._id}})
        res.status(200).json({ employee })

    } catch(err){
        console.log(err.message)
        res.status(401).json({ message: "Error occured while creating this employee"})
    }
})
router.get('/get-employee-by-id', async (req, res) => {
    const { employeeId } = req.body;
    
    if (employeeId){
        try {
            const employee = await Company.findById(employeeId).select(" -_id " )
            if(!employee){
                res.status(404).json({ message: "No employee found"})
            }
            res.status(200).json({ employee })
        } catch(err){
            console.log('Error occured while creating the employee')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing employee Id"})
    } 
})

router.put('/update-employee-by-id', async (req, res) => {
    const { employeeId, ...rest } = req.body
    
    if(employeeId){
        try {
            const employee = await Employee.findoneAndUpdate({ _id: employeeId }, rest )
            if(!employee){
                res.status(404).json({ message: "No employee found"})
            }
            res.status(200).json({ employee })
    
        } catch(err) {
            console.log('Error occured while updating the employee')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing employee Id"})
    }
})

router.delete('/delete-employee-by-id', async (req, res) => {
    const { employeeId } = req.body;

    if(employeeId){
        try {
            const employee = await Employee.findOneAndDelete({ _id: employeeId })
            if(!employee){
                res.status(404).json({ message: "No employee found"})
            } else {
                await Company.findOneAndUpdate({ _id: employee.company }, { $pull: { employees: employee._id }})
                let affectedCount = await Employee.updateMany({ manager: employee._id }, { manager: null })
                res.status(200).json({ message: `employee deleted, ${affectedCount} employees' mananger info updated` })
            }
    
        } catch(err) {
            console.log('Error occured while deleting the employee')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing employee Id"})
    }
})

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json({ employees })
    } catch(err){
        console.log('Error occured')
        res.status(400).json({ error: err.messsage })
    }
})

router.get('/get-employees-by-company', async (req, res) => {
    const { companyId } = req.body;

    if(companyId){
        try {
            let data = await Employee.find()
            let employees = data.filter( e => e.company === companyId )
            res.status(200).json({ employees })
    
        } catch(err) {
            console.log('Error occured')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing company Id"})
    }

})



module.exports = router;