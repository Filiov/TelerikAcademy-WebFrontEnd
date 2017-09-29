'use strict';

function checkOccurrences (array, number) {
    let i = 0,
        where,
        count = 0;

    while ((where = array.indexOf(number, i)) !== -1) {
        i = where + 1;
        count += 1;
    }
    return count;
}
function checkIfItsWorkingCorrectly() {
    let arr = [5, 5, 4, 5, 1, 23, 4, 5];
    let result = checkOccurrences(arr, 5);
    console.log('Is the function working correctly? -> ' + (result === 4));
}

checkIfItsWorkingCorrectly();