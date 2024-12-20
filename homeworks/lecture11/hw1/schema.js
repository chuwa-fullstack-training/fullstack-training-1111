const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default:'this is a company'
    },
    headquarter:{
        type: String,
        default:'earth'
    },
    industry:{
        type: String,
        default:'it'
    },
    employees: [{
        type:Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

const employeeSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    startDate:{
        type: Date,
        default: Date.now()
    },
    jobTitle:{
        type: String,
        default: 'SDE'
    },
    resigned: {
        type: Boolean,
        default: false
    },
    salary: {
        type: Number,
        default: 100000
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);

module.exports = {
    Employee,
    Company
};
