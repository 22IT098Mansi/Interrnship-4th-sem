/*Check string is empty.
a. "" 
expected output => true
b. " " 
expected output => false
c. "a" 
expected output => false */

function isEmpty(str) {
    if (str === "") {
      return true;
    } else {
      return false;
    }
  }

  console.log(isEmpty("")); // true
  console.log(isEmpty(" ")); // true
  console.log(isEmpty("a")); // false
