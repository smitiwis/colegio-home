const Student = require("../models/students");
const CryptoJS = require("crypto-js");

exports.createStudent = (req, res, next) => {
  const pwdEncrypted = CryptoJS.AES.encrypt(req.body.pwd, 'secret').toString();

  const student = new Student({
    name: req.body.name,
    ape_pat: req.body.ape_pat,
    ape_mat: req.body.ape_mat,
    dni: req.body.dni,
    birthday: req.body.birthday,
    email: req.body.email,
    cel: req.body.cel,
    role_id: req.body.role_id,
    pwd: pwdEncrypted
    // creator: req.userData.userId
  });

  student
    .save()
    .then(() => {
      res.status(201).json({
        message: "Se creo correctamente al estudiante",
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "La creación del docente tuvo un error!"
      });
    });
};

exports.updateStudent = (req, res, next) => {
  const pwdEncrypted = CryptoJS.AES.encrypt(req.body.pwd, 'secret').toString();

  const student = new Student({
    _id: req.params.id,
    name: req.body.name,
    ape_pat: req.body.ape_pat,
    ape_mat: req.body.ape_mat,
    dni: req.body.dni,
    birthday: req.body.birthday,
    email: req.body.email,
    cel: req.body.cel,
    pwd: pwdEncrypted
  });

  student.updateOne({ _id: req.params.id }, student)
    .then(result => {
      res.status(200).json({ message: "Se actualizo correctamente" });
    })
    .catch(error => {
      res.status(500).json({
        message: "No sé actualizo el docente"
      });
    });
};

exports.getStudents = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const studentQuery = Students.find();
  let fetchedStudents;
  if (pageSize && currentPage) {
    studentQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  studentQuery
    .then(documents => {
      fetchedStudents = documents;
      return Students.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Lista de estudiantes obtenido correctamente!",
        students: fetchedStudents,
        maxStudents: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fallo el servicio!"
      });
    });
};

exports.getStudent = (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => {
      if (student) {
        const pwdEncrypted = student.pwd;
        const pwdDecrypted = CryptoJS.AES.decrypt(pwdEncrypted, 'secret').toString(CryptoJS.enc.Utf8);
        student.pwd = pwdDecrypted;

        res.status(200).json(student);
      } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fallo el servicio"
      });
    });
};

exports.deleteStudent = (req, res, next) => {
  Student.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Se elimino correctamente!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fallo el servicio!"
      });
    });

};
