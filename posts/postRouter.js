const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

router.post("/", (req, res) => {
  const posts = { ...req.body };
  if (!posts.text || !posts.user_id) {
    res.status(404).json({ message: "Please provide text and user_id" });
  } else {
    Posts.insert(posts)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: "Could not post to posts" });
      });
  }
});

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

router.get("/:id", (req, res) => {
  // do your magic!
  const { id } = req.params;
  Posts.getById(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Could not find post with that ID" });
    });
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
