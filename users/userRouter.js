const express = require("express");

const Users = require("./userDb");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
  const users = req.body;
  Users.insert(users)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not post to users" });
    });
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
  Users.get(req.query)
  .then(user => {
    res.status(201).json(user);
  })
  .catch(err => {
    res.status(500).json({errorMessage: "Could not get users."})
  })
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
