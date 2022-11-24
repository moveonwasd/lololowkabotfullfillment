const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  let pencil = JSON.stringify({anal: 100});
  res.end(pencil);
});

server.listen(5000);
