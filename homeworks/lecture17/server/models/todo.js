const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema ({
    itemLabel: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo