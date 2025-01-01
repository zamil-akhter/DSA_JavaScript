/*
Problem:
Print the following pattern:

*****
****
***
**
*

*/

const printDecreasingStarTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j <= n; j++) {
      str += ` *`;
    }
    console.log(str);
  }
};

printDecreasingStarTriangle(5);
