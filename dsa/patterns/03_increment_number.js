/*
Problem:
Print the following pattern:

1   
12
123
1234
12345
*/

const printIncreasingNumberTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += ` ${j}`;
    }
    console.log(str);
  }
};

const printIncreasingNumberTriangleOptimised = (n) => {
  let number = "";
  for (let i = 1; i <= n; i++) {
    number += ` ${i}`;
    console.log(number);
  }
};

printIncreasingNumberTriangle(5);

printIncreasingNumberTriangleOptimised(5);
