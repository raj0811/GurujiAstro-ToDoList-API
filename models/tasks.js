const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    taskName: {
        type: String,
        required: true

    },

    taskDescriptions: {
        type: String,
        require: true,
        unique: true
    },
    taskStatus: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


}, {
    timestamps: true
});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;