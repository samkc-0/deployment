const express = require("express");
const server = express();

server.get("/", (_, response) => {
  response.send(`Sam wrote this`);
});

module.exports = server;
