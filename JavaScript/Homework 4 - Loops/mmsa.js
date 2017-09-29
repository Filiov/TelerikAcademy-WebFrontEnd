'use strict';

function findMinMaxSumAverage(args) {
    let i,
      len,
      min = +args[0],
      max = +args[0],
      sum = 0,
      average = 0;
            
        for (i = 0, len = args.length; i < len; i += 1) {
    
            if (+args[i] >= max) {
                max = +args[i];
            }
    
            if (+args[i] <= min) {
                min = +args[i];
            }
    
            sum += +args[i];
        }
    
        average = sum / len;
    
        console.log('min=' + min.toFixed(2));
        console.log('max=' + max.toFixed(2));
        console.log('sum=' + sum.toFixed(2));
        console.log('avg=' + average.toFixed(2));		
    }

findMinMaxSumAverage(['2', '5', '1']);