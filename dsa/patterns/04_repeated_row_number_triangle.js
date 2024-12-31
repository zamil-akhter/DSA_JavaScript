/*
Problem:
Print the following pattern:

1   
22
333
4444
55555
*/

const printRepeatedRowNumberTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += ` ${i}`;
    }
    console.log(str);
  }
};

printRepeatedRowNumberTriangle(5);
