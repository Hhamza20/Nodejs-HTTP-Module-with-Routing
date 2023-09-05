import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from the Server's HOMEPAGE! ");
  }
  else if (req.url === "/about") {
    res.end("Hello from the Server's ABOUT PAGE! ");
  }
  else if (req.url === "/contact") {
    res.end("Hello from the Server's CONTACT PAGE! ");
  }
  else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end('<h2>Error 404!\nPage not found</h2>')
  }
});

server.listen("3000", "127.0.0.1", () => {
  console.log("Listening on port 3000!");
});
