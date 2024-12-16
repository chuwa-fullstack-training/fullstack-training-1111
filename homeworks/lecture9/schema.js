const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        default: 'No Descriptions'
    },
    headquarters: { type: String },
    industry: { type: String },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee'
        }
    ]
});

const employeeSchema = new Schema({
    firstName: { 
        type: String,
        required: true
    },
    lastName: { 
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    startDate: { type: Date },
    jobTitle: { type: String },
    resigned: { type: Boolean },
    salary: { type: Number },
});

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee
}