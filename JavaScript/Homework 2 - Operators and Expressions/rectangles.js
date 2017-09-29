'use strict';

function solve(args) {
    var height = +args[0];
    var width = +args[1];
    var perimeter = (2*height) + (2*width);
    var area = width * height;
    console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));

}

solve([ '2.5', '3' ]);
solve([ '5', '5' ]);