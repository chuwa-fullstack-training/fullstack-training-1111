const express = require('express')
const router = express.Router()
const { Employee, Company } = require('../schema')
const verifyToken = require('../verifyToken')

router.post('/', verifyToken, async (req, res) => {
    
    if(req.isAuthorized){
        try {
            const employeeObj = new Employee(req.body)
            const employee = await employeeObj.save()
            await Company.findOneAndUpdate({ _id: employee.company }, { $push: { 'employees': employee._id}})
            res.status(200).json({ employee })
    
        } catch(err){
            console.log(err.message)
            res.status(401).json({ message: "Error occured while creating this employee"})
        }
    } else {
        res.status(403).json({ message: "Not Authorized"})
    }
    
})
router.get('/:id', verifyToken, async (req, res) => {
    const { id } = req.params;
    
    try {
        const employee = await Employee.findById(id).select(" -_id " )
        if(!employee){
            res.status(404).json({ message: "No employee found"})
        }
        if(req.isAuthorized){
            res.status(200).json({ employee })
        } else {
            const { firstName, lastName }  = employee
            res.status(200).json({ employee: { firstName, lastName }})
        }
        
    } catch(err){
        console.log('Error occured while creating the employee')
        res.status(400).json({ error: err.messsage })
    }
    
})

router.put('/:id',  verifyToken, async (req, res) => {
    const { id } = req.params;
    if(req.isAuthorized){
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
        res.status(403).json({ message: "Not Authorized"})
    }

})

router.delete('/:id', verifyToken,  async (req, res) => {
    const { id } = req.params;

    if(req.isAuthorized){
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
        res.status(403).json({ message: "Not Authorized"})
    }

})

router.get('/', verifyToken, async (req, res) => {
    
    if(req.isAuthorized){
        try {
            let employees = await Employee.find()
            const user = await Employee.findOne({ _id: req.user })
            employees = employees.filter( e => e.company.toString() === user.company.toString() )
            res.status(200).json({ employees })
        } catch(err){
            console.log('Error occured')
            res.status(400).json({ error: err.messsage })
        }
    } else {
        res.status(403).json({ message: "Not Authorized"})
    }  
})

module.exports = router;