'use strict';

function printMatrix(args) {
	let i = +args[0], j = +args[0],
		result = '';
	for (i = 0; i < +args[0]; i += 1) {
		for (j = i + 1; j <= +args[0] + i; j += 1) {
			result += j + ' ';
		}
		result += '\n';
	}

	console.log(result);
}

printMatrix(['2']);
printMatrix(['3']);