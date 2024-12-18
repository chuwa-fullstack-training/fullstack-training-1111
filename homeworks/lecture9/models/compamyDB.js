import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },

    description: {
        type: String,
        
    },

    headquarters: {
        type: String
    },

    industry: {
        type: String,
        
    },

    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]

});

const Company = mongoose.model('Company', companySchema)
export default Company;