'use strict';

function solve(args){
    var a = +args[0];
    var b = +args[1];
    var height = +args[2];
              var area = (a + b) * height / 2;
              console.log(area.toFixed(7));
          }

          solve(['5', '7', '12']);