/*
Problem:
Print the following pattern:

12345
1234
123
12
1

*/

const printDecreasingNumberTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j <= n; j++) {
      str += ` ${j}`;
    }
    console.log(str);
  }
};

printDecreasingNumberTriangle(5);
