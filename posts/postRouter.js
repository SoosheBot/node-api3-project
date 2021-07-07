const express = require("express");

const Posts = require("./postDb");

const router = express.Router();

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

router.get("/:id", validatePostId, (req, res) => {
  // do your magic!
  Posts.getById(req.params.id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Could not find posts with that ID" });
    });
});

router.delete("/:id", validatePostId, (req, res) => {
  // do your magic!
  const { id } = req.post;
  Posts.remove(id)
    .then(posts => {
      res.status(200).json({ message: `Post ${posts} at Post ID# ${id} was deleted.` });
    })
    .catch(err => {
      res.status(500).json({ error: "Could not delete post with this ID" });
    });
});

router.put("/:id", validateThisPost, validatePostId, (req, res) => {
  // do your magic!
  const posts = { ...req.body };
  const { id } = req.params;
  Posts.update(id, posts)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not update user at this ID" });
    });
});

// custom middleware

function validateThisPost(req, res, next) {
  // do your magic!
  if (req.body && req.body.text) {
    next();
  } else if (!req.body.text) {
    res.status(400).json({ message: "Missing required text field" });
  } else {
    res.status(400).json({ message: "Missing post data" });
  };
};

function validatePostId(req, res, next) {
  // do your magic!
  Posts.getById(req.params.id)
  .then(post => {
    if (post) {
      req.post = post;
      next();
    } else {
      res.status(400).json({ errorMessage: "invalid post ID" });
    }
  });
};


module.exports = router;
