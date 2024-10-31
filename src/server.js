"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
var http_1 = require("http");
var fs_1 = require("fs");
var path_1 = require("path");
var server = http_1.default.createServer(function (req, res) {
    if (req.url === "/view-image") {
        var imagePath = path_1.default.join(__dirname, "dist", "images", "veryhappydog.jpg");
        fs_1.default.readFile(imagePath, function (err, data) {
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
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found :(");
});
var PORT = 3000;
server.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT, "."));
});
