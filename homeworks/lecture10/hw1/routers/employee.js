const express = require('express')
const router = express.Router()
const { Employee, Company } = require('../schema')

router.post('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    if (id){
        try {
            const employee = await Employee.findById(id).select(" -_id " )
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

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    if(id){
        try {
            const employee = await Employee.findOneAndUpdate({ _id: id }, req.body )
            if(!employee){
                res.status(404).json({ message: "No employee found"})
            }
            res.status(200).json({ message: "Emoployee updated" })
    
        } catch(err) {
            console.log('Error occured while updating the employee')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(400).json({ message: "Missing employee Id"})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if(id){
        try {
            const employee = await Employee.findOneAndDelete({ _id: id })
            if(!employee){
                res.status(404).json({ message: "No employee found"})
            } else {
                await Company.findOneAndUpdate({ _id: employee.company }, { $pull: { employees: employee._id }})
                let { modifiedCount } = await Employee.updateMany({ manager: employee._id }, { manager: null })
                res.status(200).json({ message: `employee deleted, ${modifiedCount} employees' mananger info updated` })
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

module.exports = router;