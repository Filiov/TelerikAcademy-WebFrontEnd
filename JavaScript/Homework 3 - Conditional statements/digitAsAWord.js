'use strict';

function solve(args) {
    let number = +args[0];
    switch (number) {
        case 1: digit = "one"; break;
        case 2: digit = "two"; break;
        case 3: digit = "three"; break;
        case 4: digit = "four"; break;
        case 5: digit = "five"; break;
        case 6: digit = "six"; break;
        case 7: digit = "seven"; break;
        case 8: digit = "eight"; break;
        case 9: digit = "nine"; break;
        case 0: digit = "zero"; break;
        default:
            digit = "not a digit"; break;
    }
    console.log(digit);
}

solve(['2']);
solve(['1']);