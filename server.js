const express = require('express');
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

server.use(helmet());
server.use(express.json());
server.use(logger);


server.use("/api/posts", logger, postRouter);
server.use("/api/users", logger, userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


module.exports = server;
