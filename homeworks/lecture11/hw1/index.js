const express = require('express')
const companyRouter = require('./routers/company')
const employeeRouter = require('./routers/employee')
const authRouter = require('./routers/auth')
const connectDB = require('./db')

const app = express();
connectDB()

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/companies', companyRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/auth', authRouter)


app.listen(3000, () => {
    console.log('Listening on port 3000!')
})