const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter the Name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the Email"],
        validate: [validator.isEmail, "Please enter the Valid Email"],
        unique: true,
    },
    contact: {
        type: Number,
        required: [true, "Please Enter the Number"]
    },
    className: {
        type: String,
        required: [true, "Please Enter the Class Name"]
    },
    roll: {
        type: Number,
        required: [true, "Please enter the roll no"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Student", studentSchema)