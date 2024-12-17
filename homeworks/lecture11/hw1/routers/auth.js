const express = require('express')
const router = express.Router()
const { Employee } = require('../schema')
const jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        let user = await Employee.findOne({ firstName })
        if(!user){
            res.status(400).json({ message: "No user found with this first name." })
        }
        if(user.lastName !== lastName){
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const payload = {
            user: user._id
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d'})

        res.status(200).json({ token })

    } catch(err){
        console.log(err.message)
    }
})

module.exports = router;