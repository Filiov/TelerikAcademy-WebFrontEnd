'use strict';

function solve(args) {
    let integer = +args[0];
 
    if (integer % 5 == 0 && integer % 7 == 0) {
        console.log("true " + integer);
    } else {
        console.log("false " + integer);
    }
 }

 solve(['35']);
 solve(['7']);