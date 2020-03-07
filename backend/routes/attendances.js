const express = require("express");
const AttendanceController = require("../controllers/attendances");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();
router.post("",  AttendanceController.createAttendance); //create
// router.post("", checkAuth,  TeachersController.createTeacher); //create

router.put("/:id", AttendanceController.updateAttendance);//actualizar o editar

router.get("", AttendanceController.getAttendance);//listar todos

router.get("/:id", AttendanceController.getAttendance);//listar 1


module.exports = router;
