// propio de nodejs
const express = require("express");
const StudentsController = require("../controllers/students");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();
router.post("", StudentsController.createStudent);
// editar
// router.put("/:id", StudentsController.updateStudent);

// router.get("", PostController.getPosts);
// router.get("/:id", PostController.getPost);
// router.delete("/:id", checkAuth, PostController.deletePost);
module.exports = router;
