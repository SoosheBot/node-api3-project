const express = require("express");

const Users = require("./userDb");
const Posts = require("../posts/postDb");

const router = express.Router();

router.post("/", validateUserId(), (req, res) => {
  // do your magic!
  const users = { ...req.body };

  Users.insert(users)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Could not post new user to users" });
    });
});

router.post("/:id/posts", validateUserId(), validatePost(), (req, res) => {
  // do your magic!
  const { id } = req.params;
  const { text } = req.body;
  Posts.insert({ user_id: id, text: text })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ error: "Error saving post to database." });
    });
});

router.get("/", (req, res) => {
  // do your magic!
  Users.get(req.query)
    .then(users => {
      res.status(201).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get users." });
    });
});

router.get("/:id", validateUserId(), (req, res) => {
  // do your magic!
  const { id } = req.params;
  Users.getById(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Could not find user with that ID" });
    });
});

router.get("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
  const { id } = req.params;
  Users.getUserPosts(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not get post with this ID" });
    });
});

router.delete("/:id", validateUserId(), (req, res) => {
  // do your magic!
  const { id } = req.user;
  Users.remove(id)
  .then(users => {
    res.status(200).json({ message: `${users} at ${id} was deleted.` })
  })
  .catch(err => {
    res.status(500).json({error: "Could not delete user with this ID"})
  })
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
