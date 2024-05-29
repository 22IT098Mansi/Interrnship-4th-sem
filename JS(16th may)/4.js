function multiply(numbers) {
    const numArray = numbers.split(',').map(num => Number(num.trim()));
    let product = 1;
    for (let i = 0; i < numArray.length; i++) {
      product *= numArray[i];
    }
    return product;
  }

console.log(multiply("2, 3")); 
console.log(multiply("1, 2, 3, 4")); 
console.log(multiply("54, 75, 453, 0"));
console.log(multiply("10, -2")); 