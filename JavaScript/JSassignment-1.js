function sum(numbersArray) {
    let sum = 0;
    for (i=0; i < numbersArray.length; i++) {
        sum += numbersArray[i]; 
    }
     return sum;
  }
  console.log(sum([1, 2, 3, 4]) === 10);
  console.log(sum([-3, 5, 19, -6]) === 15);