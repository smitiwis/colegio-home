const AttendancesTeacher = require("../models/attendancesStudent");
const AttendancesStudent = require("../models/attendancesStudent");

exports.createAttendance = (req, res, next) => {
  const type = req.body.type;
  const AttendanceSchema = type === '1' ? AttendancesStudent : AttendancesTeacher;

  const attendance = new AttendanceSchema({
    dni: req.body.dni,
    user_id: req.body.user_id,
    state: req.body.state,
    reason: req.body.reason,
    date: req.body.date,
    from: req.body.from,
  });

  attendance
    .save()
    .then(() => {
      res.status(201).json({
        message: "Se registro correctamente la asistencia",
      });
    })
    .catch(error => {
      console.log(error, 'ererre')
      res.status(500).json({
        message: "La creación del docente tuvo un error!"
      });
    });
};

exports.updateAttendance = (req, res, next) => {
  const AttendanceSchema = type === '1' ? AttendancesStudent : AttendancesTeacher;

  const attendance = new AttendanceSchema({
    dni: req.body.dni,
    user_id: req.body.user_id,
    state: req.body.state,
    reason: req.body.reason,
    date: req.body.date,
    from: req.body.from,
  });

  attendance.updateOne({ _id: req.params.id }, attendance)
    .then(result => {
      res.status(200).json({ message: "Se actualizo correctamente" });
    })
    .catch(error => {
      res.status(500).json({
        message: "No sé actualizo el docente"
      });
    });
};

exports.getAttendances = (req, res, next) => {
  // const pageSize = +req.query.pagesize;
  // const currentPage = +req.query.page;
  // const studentQuery = Students.find();
  // let fetchedStudents;
  // if (pageSize && currentPage) {
  //   studentQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  // }
  // studentQuery
  //   .then(documents => {
  //     fetchedStudents = documents;
  //     return Students.count();
  //   })
  //   .then(count => {
  //     res.status(200).json({
  //       message: "Lista de estudiantes obtenido correctamente!",
  //       students: fetchedStudents,
  //       maxStudents: count
  //     });
  //   })
  //   .catch(error => {
  //     res.status(500).json({
  //       message: "Fallo el servicio!"
  //     });
  //   });
};

exports.getAttendance = (req, res, next) => {
  Student.findById(req.params.id)
    .then(student => {
      if (student) {
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

