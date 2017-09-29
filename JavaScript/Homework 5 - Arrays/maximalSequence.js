'use strict';

function solve(args) {
    let length = +args.shift(),
        sequence = args.map(Number),
        count = 1,
        maxCount = 0;

    for (let i = 0; i < sequence.length - 1; i += 1) {
        if (sequence[i] === sequence[i + 1]) {
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