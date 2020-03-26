const Period = require("../models/period");

exports.savePeriod = (req, res, next) => {
  const period = new Period({
    name: req.body.name
  });

  period
    .saveAudit()
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

exports.updatePeriod = (req, res, next) => {

  const period = new Period({
    name: req.body.name
  });

  Period.updateOneAudit({ _id: req.params.id }, period)
    .then(result => {
      res.status(200).json({ message: "Se actualizo correctamente" });
    })
    .catch(error => {
      res.status(500).json({
        message: "No sé actualizo el docente"
      });
    });
};
