const Student = require("../model/studentModel")
const ApiFeature = require("../utils/apiFeature")


// Creating student Api
exports.createStudent = async (req, res, next) => {
    try {
        const student = await Student.create(req.body)

        res.status(200).json({
            success: true,
            student
        })
    } catch (err) {
        res.status(500).json(err)
    }
}


// get all student data
exports.getStudent = async (req, res, next) => {
    try {
        // const students = await Student.find()
        const apiFeature = new ApiFeature(Student.find(), req.query).search()
        const students = await apiFeature.query;

        res.status(200).json({
            success: true,
            students
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

// get single student  data 
exports.getSingleStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(500).json("Studeent not found")
        }

        res.status(200).json({
            success: true,
            student,
        });
    } catch (err) {
        res.status(500).json(err)
    }
}


// update student data by id
exports.updateStudent = async (req, res, next) => {
    try {
        let student = await Student.findById(req.params.id)

        if (!student) {
            return res.status(500).json("Student not Found")
        }

        student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            student
        })

    } catch (err) {
        res.status(500).json(err)
    }
}

// delete single student data by id
exports.deleteStudent = async (req, res, next) => {
    try {
        let student = await Student.findById(req.params.id)

        if (!student) {
            return res.status(500).json("Student not Found")
        }

        await student.remove()

        res.status(200).json({
            success: true
        })

    } catch (err) {
        res.status(500).json(err)
    }
}

// delete student data
exports.deleteAllStudent = async (req, res, next) => {
    try {
        //let student = await Student.findById(req.params.id)



        await Student.remove()

        res.status(200).json({
            success: true,
        })

    } catch (err) {
        res.status(500).json(err)
    }
}

