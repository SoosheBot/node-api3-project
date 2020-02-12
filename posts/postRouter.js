const express = require('express');

const Posts = require("./postDb");

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get(req.query)
  .then(posts => {
    res.status(201).json(posts);
  })
  .catch(err => {
    res.status(500).json({errorMessage: "Could not get users."})
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
