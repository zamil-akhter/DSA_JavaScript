/*
Problem:
Print the following pattern:

*****
*****
*****
*****
*****
*/

const printSquarePattern = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    console.log(str);
  }
};

printSquarePattern(4);
