'use strict';

function solve(args) {
    let length = +args.shift(),
        numbers = args.map(Number),
        count = 1,
        maxCount = 0;

    for (let i = 0; i < numbers.length - 1; i += 1) {
        if (numbers[i] < numbers[i + 1]) {
            count += 1;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            count = 1;
        }
    }
    console.log(maxCount);
}