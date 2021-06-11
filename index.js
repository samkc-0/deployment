const server = require("./server");

const port = process.env.PORT || 3003;

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
