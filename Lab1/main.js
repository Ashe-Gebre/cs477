/* eslint-disable camelcase */
"use strict";


Array.prototype.even = function () {
    let evenArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            evenArr.push(this[i]);
        }
    }
    return evenArr;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8].even());




Array.prototype.odd = function () {
    let evenArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 !== 0) {
            evenArr.push(this[i]);
        }
    }
    return evenArr;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8].odd());
