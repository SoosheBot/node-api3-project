const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

// router.post("/", (req, res) => {
//   const posts = { ...req.body };
//   Users.insert(posts)
//     .then(post => {
//       res.status(201).json(post);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ errorMessage: "Could not post new post to posts" });
//     });
// });

router.get("/", (req, res) => {
  // do your magic!
  Posts.get(req.query)
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get posts." });
    });
});

// router.get("/:id", validatePostId(), (req, res) => {
//   // do your magic!
//   Posts.getById(req.params.id)
//     .then(posts => {
//       res.status(200).json(posts);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ errorMessage: "Could not find posts with that ID" });
//     });
// });

// router.delete("/:id", validatePostId(), (req, res) => {
//   // do your magic!
//   const { id } = req.user;
//   Posts.remove(id)
//     .then(posts => {
//       res.status(200).json({ message: `${posts} at ${id} was deleted.` });
//     })
//     .catch(err => {
//       res.status(500).json({ error: "Could not delete post with this ID" });
//     });
// });

// router.put("/:id", validatePostId(), (req, res) => {
//   // do your magic!
// });

// // custom middleware

// function validatePostId(req, res, next) {
//   // do your magic!
//   Posts.getById(req.params.id)
//   .then(post => {
//     if (post) {
//       req.post = post;
//       next();
//     } else {
//       res.status(400).json({ errorMessage: "invalid post ID" });
//     }
//   });
// }

module.exports = router;
