const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.write("pencil");
  res.end();
});

server.listen(5000);
