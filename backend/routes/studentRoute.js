const express = require("express")
const { createStudent, getStudent, getSingleStudent, updateStudent, deleteStudent, deleteAllStudent } = require("../controller/studentController")


const router = express.Router()

router.route("/student/create").post(createStudent)
router.route("/student/get").get(getStudent)
router.route("/student/gets/:id").get(getSingleStudent)
router.route("/student/update/:id").put(updateStudent)
router.route("/student/delete/single/:id").delete(deleteStudent)
router.route("/student/delete/all").delete(deleteAllStudent)


module.exports = router
