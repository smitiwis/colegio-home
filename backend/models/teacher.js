const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: { type: String, required: true },
  ape_pat: { type: String, required: true },
  ape_mat: { type: String, required: true },
  dni: { type: String, required: true },
  birthday: { type: Date, required: true },
  email: { type: String, required: true },
  cel: { type: String, required: true },
  role_id: { type: Number, required: true },
  pwd: { type: String, required: true },
});

module.exports = mongoose.model("Teacher", teacherSchema);
