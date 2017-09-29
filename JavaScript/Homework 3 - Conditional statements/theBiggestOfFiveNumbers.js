'use strict';

function solve(args) {
    var index = args.length - 1;

    function getMax(a, i) {
        if (i === 0) return +a[0];
        if (i > 0) {
            if (+a[i] >= getMax(a, i - 1)) {
                return +a[i];
            } else {
                return getMax(a, i - 1);
            }
        }
    }

    return getMax(args, index);
}