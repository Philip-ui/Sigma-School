function possibleBonus(a,b) {
    const difference = b - a; // difference between a and b
    return difference >= 0 && difference <= 6; //Check if diff is within range between 1 and 6 
  }
  
  console.log(possibleBonus(3, 7)); // Output: true
  console.log(possibleBonus(1, 9)); // Output: false
  console.log(possibleBonus(5, 3)); // Output: false