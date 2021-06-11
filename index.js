const express = require("express");

const app = express();

var port = process.env.PATH || 3040;

app.get("/", (_, response) => {
  response.send(`Hi Bren! process.env.path=${port}.`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
