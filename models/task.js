// import mongoose
const mongoose = require('mongoose');

// create schema defination
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    due_date:{
        type: String
    },
    is_important:{
        type: Boolean,
        required: true
    }
});

// creating the collection
const Task = mongoose.model('Task',taskSchema);

// exporting the collection
module.exports = Task;