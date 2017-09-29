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

let var array = [1, 5, 3, 8, 2];
letvar result = checkNeighbours(array, 3);
console.log (result);