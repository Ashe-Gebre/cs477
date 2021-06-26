/* eslint-disable id-length */
/* eslint-disable quotes */
"use strict";

/*Using Node Stream API, create a script to unzip a file.
(use zlib.createGunzip() stream)
*/
// var fs = require("fs");
// var zlib = require('zlib');
// fs.createReadStream('input.txt').pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
// console.log("File Compressed.");

let fs = require("fs");
let zlib = require('zlib'); 
fs.createReadStream('./input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./input.txt'));
console.log("File Decompressed.");