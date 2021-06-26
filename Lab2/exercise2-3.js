/* eslint-disable id-length */
/* eslint-disable quotes */
"use strict";
  
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.createReadStream("./pic.jpg").pipe(res);
});

server.listen(3000);