import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    firstName: { type: String,required: true },
    lastName: { type: String, required: true },
    company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
    startDate: { type: Date, default: Date.now},
    jobTitle: { type: String},
    resigned: { type: Boolean},
    salary: { type: Number},
    _manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Empolyee', default: null}
});

const Employee =  mongoose.model('Employee', employeeSchema);
export default Employee;