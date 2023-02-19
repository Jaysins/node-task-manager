const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [20, "Name less than 20"]
    },
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model("Task", TaskSchema)
