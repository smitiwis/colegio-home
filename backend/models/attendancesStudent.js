const mongoose = require("mongoose");

const attendancesStudentSchema = mongoose.Schema({
  dni: { type: String, required: true },
  user_id: { type: String, required: true },
  state: { type: String, required: true },
  reason: { type: String, required: true },
  date: { type: Date, required: true },
  from: { type: String, required: true },
});

module.exports = mongoose.model("AttendancesStudent", attendancesStudentSchema);