class User {    
    constructor(name, age) {        
      this.name = name        
      this.age = age    
    }
      
    greet() {        
      console.log(`Hello, I am ${this.name}. I am ${this.age} years old!`)    
    }
  }
  
  const user1 = new User('Yap', 30)
  const user2 = new User('Kaiz', 40)
  
  user1.greet()
  user2.greet()