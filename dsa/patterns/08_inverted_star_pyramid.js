/*
Problem:
Print the following pattern:

*********
 *******
  *****
   ***
    *

*/

const printInvertedStarPyramid = (n) => {
  for (let i = n; i >= 1; i--) {
    let data = "";
    for (let j = i; j < n; j++) {
      data += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      data += "*";
    }
    console.log(data);
  }
};

printInvertedStarPyramid(5);
