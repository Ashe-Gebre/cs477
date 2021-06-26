"use strict";

/* Create a web server that's going to send a response of big image (bigger than 3MB)
to any client that sends a request to your specified server:port.
Use the best way for performance.
(Try to solve this in many different ways and inspect the loading time 
in the browser and send many requests to see the performance differences)
*/
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    let image = fs.readFileSync('./tiles.jpg');
    res.end(image, 'binary');
});

server.listen(8080);