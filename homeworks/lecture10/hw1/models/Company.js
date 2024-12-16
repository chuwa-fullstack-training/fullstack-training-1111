const mongoose = require('mongoose');
const {Schema} = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'default description',
  },
  headquarters: {
    type: String,
    default: 'default headquarters',
  },
  industry: {
    type: String,
    default: 'default industry',
  },
  _employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
  ],
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
