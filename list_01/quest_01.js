// https://vjudge.net/contest/392255#problem/A

const io = require('console-read-write');

async function main() {
  const read = await io.read();

  const matrix = Array(1000).fill(0); 

  for(var i = 1; i < read; i++) {
    for(var j = 0; j < read; j++) {
      matrix[j] = i;
    }; 
  };

  let numbers = []; 

  for(var i = 0; i < read; i++) {
    for(var j = 0; j < read; j++) {
        if((matrix[i] * matrix[j]) > read && (matrix[i] % matrix[j] == 0) && (matrix[i] % matrix[j] < read)) {
            numbers.push(matrix[i], matrix[j]);
            break;  
        };
    };
  };

  numbers.length === 2 ? console.log(numbers[0], numbers[1]) : console.log('-1');
}

main();
