/*
Problem:
Print the following pattern:

    *
   ***
  *****
 *******
*********

*/

const printCenteredStarPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let data = "";
    for (j = i; j < n; j++) {
      data += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      data += "*";
    }
    console.log(data);
  }
};

printCenteredStarPyramid(5);
