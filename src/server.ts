// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/view-image") {
      const imagePath = path.join(
        __dirname,
        "../dist/images/veryhappydog.jpg"
      );

      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Something went wrong.");
          return;
        }
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      });
      return;
    }

    res.writeHead(404, {"Content-Type": "text/plain"})
    res.end("Page not found :(")
  }
);

const PORT: number = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
