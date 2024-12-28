/*
Problem:
Print the following pattern:

*
**
***
****
*****
*/

const incrementPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

incrementPattern(5);
