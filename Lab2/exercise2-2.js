/* eslint-disable quotes */
/* eslint-disable id-length */
"use strict";

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) => {
    fs.readFile('./pic.jpg', (err, data) => {
        if (err) throw err;
        response.end(data);
    });
});

server.listen(3000);