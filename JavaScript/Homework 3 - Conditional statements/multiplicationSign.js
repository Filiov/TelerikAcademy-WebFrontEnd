'use strict';

function solve(args){
    let a = +args[0],
        b = +args[1],
        c = +args[2];
    
    if (a > 0 && b > 0 && c > 0) {
      console.log('+');
    } else if (a < 0 && b < 0 && c > 0) {
      console.log('+');
    } else if (a < 0 && b > 0 && c < 0) {
      console.log('+');
    } else if (a > 0 && b < 0 && c < 0) {
      console.log('+');
    } else if (a < 0 && b > 0 && c > 0) {
      console.log('-');
    } else if (a > 0 && b < 0 && c > 0) {
      console.log('-');
    } else if (a > 0 && b > 0 && c > 0) {
      console.log('-'); 
    } else if (a < 0 && b < 0 && c < 0) {
      console.log('-');
    } else if (a === 0 || b === 0 || c === 0) {
      console.log('0');
    }
  }

  solve(['5', '2', '2']);
  solve(['-2', '-2', '1']);