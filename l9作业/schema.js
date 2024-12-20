const mongoose = require('mongoose'); 
const { Schema } = mongoose;

// Post Schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: 'default content'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

// User Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return value.includes('@');
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

// Employee Schema
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
  startDate: {
    type: Date,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  resigned: {
    type: Boolean,
    default: false
  },
  salary: {
    type: Number,
    required: true
  }
});

// Company Schema
const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  headquarters: {
    type: String
  },
  industry: {
    type: String
  },
  employees: [employeeSchema]
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);

module.exports = {
  User,
  Post,
  Employee,
  Company
};
