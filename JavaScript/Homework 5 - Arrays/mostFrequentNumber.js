'use strict';

function solve(args) {
    let len = +args.shift(),
        numbers = args.map(Number),
        frequentNum,
        maxCount = 0,
        i,
        j;

    for (i = 0; i < len; i += 1) {
        let currNum = numbers[i],
            count = 1;

        for (j = i + 1; j < len; j += 1) {
            if (currNum === numbers[j]) {
                count += 1;
                if (count > maxCount) {
                    maxCount = count;
                    frequentNum = currNum;
                }
            }
        }
    }
    return frequentNum + ' (' + maxCount + ' times)';
}