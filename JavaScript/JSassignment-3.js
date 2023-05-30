function factorial(anyNumber){  
    let factor = 1;
  for (i=anyNumber; i >= 1; i--) {
    factor = factor * i;    
  }
  return factor;
}

console.log(factorial(5) === 120);
console.log(factorial(4) === 24);
console.log(factorial(1) === 1);