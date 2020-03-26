const express = require("express");
const TeachersController = require("../controllers/teachersController");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();
router.post("",  TeachersController.createTeacher); //create
// router.post("", checkAuth,  TeachersController.createTeacher); //create

router.put("/:id", TeachersController.updateTeacher);//actualizar o editar

// router.get("", PostController.getPosts);//listar todos

// router.get("/:id", PostController.getPost);//listar 1

// router.delete("/:id", checkAuth, PostController.deletePost);//eliminar

module.exports = router;
