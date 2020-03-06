const Student = require("../models/student");

exports.createStudent = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const student = new Student({
        name: req.body.name,
        ape_pat: req.body.ape_pat,
        ape_mat: req.body.ape_mat,
        dni: req.body.dni,
        birthday: req.body.birthday,
        email: req.body.email,
        cel: req.body.cel,
        // creator: req.userData.userId
    });

    student
        .save()
        .then(createdStudent => {
            res.status(201).json({
                message: "Se creo correctamente el docente",
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "La creación del docente tuvo un error!"
            });
        });
};
