const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const postRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");

const server = express();

//custom middleware
function logger(req,res,next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}
    )}`
  );
  next();
};

server.use(cors());
server.use(helmet())

server.use("/api/posts", logger, postRouter);
server.use("/api/users", logger, userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
