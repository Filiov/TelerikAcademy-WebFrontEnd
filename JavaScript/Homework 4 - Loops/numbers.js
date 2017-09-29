'use strict';

function solve(args) {
    let N = +args[0],
        result = '';
  
    for (N = 1; N <= args; N += 1) {
     result += N + ' ';
    }
    console.log(result);
  }

  solve(['5']);
  solve(['1']);