'use strict';

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
           let x;
           let x1;
           let x2;
           let discriminant = ((b * b) - 4 * a * c);
           if (a == 0) {
               console.log(" " + ((-c) / b));
           }
           else if (discriminant == 0) {
               x = ((-b) / (2 * a));
               console.log("x1=x2=" + x.toFixed(2));
           }
           else if (discriminant > 0) {
               x2 = ((-b) + Math.sqrt(discriminant)) / (2 * a);
               x1 = ((-b) - Math.sqrt(discriminant)) / (2 * a);
               console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
           }
           else {
               console.log("no real roots");
           }
       }

       solve(['2', '5', '-3']);
       solve(['-0.5', '4', '-8']);