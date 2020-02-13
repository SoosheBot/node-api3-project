const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

router.post("/", validatePostId(), (req, res) => {
  const posts = { ...req.body };
  Users.insert(posts)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Could not post new post to posts" });
    });
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
  const { id } = req.params;
  Posts.getById(id)
  .then(post => {
    if (post) {
      req.post = post;
      next();
    } else {
      res.status(400).json({error: "Invalid post id"})
    }
  })
  .catch(err => {
    res.status(500).json({error: "Could not validate post id"})
  })
}

module.exports = router;
