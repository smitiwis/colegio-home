const Teacher = require("../models/teacher");

exports.createTeacher = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const teacher = new Teacher({
    name: req.body.name,
    ape_pat: req.body.ape_pat,
    ape_mat: req.body.ape_mat,
    dni: req.body.dni,
    birthday: req.body.birthday,
    email: req.body.email,
    cel: req.body.cel,
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
      res.status(500).json({
        message: "La creación del docente tuvo un error!"
      });
    });
};

exports.updateTeacher = (req, res, next) => {

  const teacher = new Teacher({
    _id: req.params.id,
    name: req.body.name,
    ape_pat: req.body.ape_pat,
    ape_mat: req.body.ape_mat,
    dni: req.body.dni,
    birthday: req.body.birthday,
    email: req.body.email,
    cel: req.body.cel,
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

// exports.getPosts = (req, res, next) => {
//   const pageSize = +req.query.pagesize;
//   const currentPage = +req.query.page;
//   const postQuery = Post.find();
//   let fetchedPosts;
//   if (pageSize && currentPage) {
//     postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
//   }
//   postQuery
//     .then(documents => {
//       fetchedPosts = documents;
//       return Post.count();
//     })
//     .then(count => {
//       res.status(200).json({
//         message: "Posts fetched successfully!",
//         posts: fetchedPosts,
//         maxPosts: count
//       });
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Fetching posts failed!"
//       });
//     });
// };

// exports.getPost = (req, res, next) => {
//   Post.findById(req.params.id)
//     .then(post => {
//       if (post) {
//         res.status(200).json(post);
//       } else {
//         res.status(404).json({ message: "Post not found!" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Fetching post failed!"
//       });
//     });
// };

// exports.deletePost = (req, res, next) => {
//   Post.deleteOne({ _id: req.params.id, creator: req.userData.userId })
//     .then(result => {
//       console.log(result);
//       if (result.n > 0) {
//         res.status(200).json({ message: "Deletion successful!" });
//       } else {
//         res.status(401).json({ message: "Not authorized!" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Deleting posts failed!"
//       });
//     });
// };
