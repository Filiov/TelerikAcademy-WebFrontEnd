'use strict';

function solve(args) {
    let length = +args[0],  
        array = [],
        i;
        
    for (i = 0; i < length; i += 1) {
      array[i] = i * 5;	  
    }
  
    console.log(array.join('\n'));
  }

