const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const postsRoutes = require("./routes/posts");
const teacherRoutes = require("./routes/teachers");
const studentRoutes = require("./routes/students");
const attedanceRoutes = require("./routes/attendances");

const app = express();

mongoose
  .connect('mongodb+srv://andreu:swNGEOUFZ1MAStF3@cluster0-kfzpz.mongodb.net/colegio',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/attendance", attedanceRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);

module.exports = app;
