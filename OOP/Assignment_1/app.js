class Calculator {
    constructor(number) {
      this.number = number;
      this.initial = this.number;
      this.result = this.number;
    }
  
    add(value) {
      this.number += value;
      this.result = this.number;
      console.log(`${this.initial} + ${value} = ${this.result}`);
      return this;
    }

    subtract(value) {
        this.initial = this.number;
        this.number -= value;
        this.result = this.number;
        console.log(`${this.initial} - ${value} = ${this.result}`);
        return this;
    }

    multiply(value) {
        this.initial = this.number;
        this.number = this.number * value;
        this.result = this.number;
        console.log(`${this.initial} * ${value} = ${this.result}`);
        return this;
    }

    divide(value) {
        this.initial = this.number;
        this.number = this.number / value;
        this.result = this.number;
        console.log(`${this.initial} / ${value} = ${this.result}`);
        return this;
    }
  }
  
  let calculator = new Calculator(0);
  
  calculator.add(5).subtract(2).multiply(5).divide(3);