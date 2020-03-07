const Teacher = require("../models/teacher");
const CryptoJS = require("crypto-js");

exports.createTeacher = (req, res, next) => {
  console.log('inicio creado')
  const pwdEncrypted = CryptoJS.AES.encrypt(req.body.pwd, 'secret').toString();
 console.log(pwdEncrypted, 'encriptado')
 
  const teacher = new Teacher({
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

  teacher
    .save()
    .then(createdTeacher => {
      res.status(201).json({
        message: "Se creo correctamente el docente",
      });
    })
    .catch(error => {
      console.log(error, 'err')
      res.status(500).json({
        message: "La creación del docente tuvo un error!"
      });
    });
};

exports.updateTeacher = (req, res, next) => {
  const pwdEncrypted = CryptoJS.AES.encrypt(req.body.pwd, 'secret').toString();

  const teacher = new Teacher({
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

  Teacher.updateOne({ _id: req.params.id }, teacher)
    .then(result => {
      res.status(200).json({ message: "Se actualizo correctamente" });
    })
    .catch(error => {
      res.status(500).json({
        message: "No sé actualizo el docente"
      });
    });
};

exports.getTeachers = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const teacherQuery = Post.find();
  let fetchedTeachers;
  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  teacherQuery
    .then(documents => {
      fetchedTeachers = documents;
      return Post.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        teachers: fetchedTeachers,
        maxTeachers: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getTeacher = (req, res, next) => {
  Teacher.findById(req.params.id)
    .then(teacher => {
      if (teacher) {
        const pwdEncrypted = teacher.pwd;
        const pwdDecrypted = CryptoJS.AES.decrypt(pwdEncrypted, 'secret').toString(CryptoJS.enc.Utf8);
        teacher.pwd = pwdDecrypted;

        res.status(200).json(teacher);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};

exports.deleteTeacher = (req, res, next) => {
  Teacher.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};
