'use strict';

function checkNeighbours (array, pos) {
    let len = array.length;
    if (len < 3 || pos === 0 || pos === (len - 1)) {
        return false;
    }
    if (array[pos] > array[pos - 1] && array[pos] > array[pos + 1]) {
        return true;
    }
    return false;
}

function firstBigger (array) {
    let i,
        len = array.length;
    for (i = 0; i < len; i += 1) {
        if (checkNeighbours(array, i))
        return i;
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 7],
    result;

result = firstBigger(array);
console.log ('The first index is: ' + result);