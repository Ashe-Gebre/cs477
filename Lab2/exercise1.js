/* eslint-disable quotes */
"use strict";

/*
Create a simple Node script that converts 'www.mum=i.edu' domain name
to the equivalent IP address.
(Use 'dns' module, resolve4)
*/
const dns = require('dns');
dns.resolve4('www.miu.edu', function(error, address) {
    if (error) throw error;
    console.log(address);
});