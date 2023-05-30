const user = {    
    // your code
    name: "Philip",
    age: 54,
    greet() {
       console.log(`Hello, I am ${this.name}`)
    }
  }
  
  user.greet() // "Hello, I am {name}"

  const car = {
    brand: "Tesla",
    model: "s",
    registration: "BGS9999",
    toString() {
      console.log(`This ${this.brand} ${this.model} is registered under the number ${this.registration}`)
    }
  }

  car.toString();

  var a = 1

function someFunction(number) {    
  function otherFunction(input) {        
    return a    
  }
    
  a = 5
    
  return otherFunction
}

var firstResult = someFunction(9)
var result = firstResult(2)

console.log(result)