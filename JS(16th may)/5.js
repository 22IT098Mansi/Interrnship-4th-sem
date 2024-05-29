function missing(arr) {
    arr.sort((a, b) => a - b);
  
    
    let missingNum = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) {
        missingNum = i + 1;
        break;
      }
    }
    return missingNum;
  }

  console.log(missing([1, 2, 3, 5, 6, 7, 8, 9, 10])); 