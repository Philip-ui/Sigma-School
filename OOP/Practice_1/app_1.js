// 2 Characters: Student, Teacher
// Properties: name, age, subjects
// Method: greet(), .registerSubjects() -> student

class User {
    constructor(name, age, subjects) {
        this.name = name
        this.age = age
        this.subjects = subjects
    }

    greet() {
        console.log(`Hello, I am ${this.name}! I am ${this.age} years old!`)
    }
}

class Student extends User {
    constructor(name, age, subjects) {
       super(name, age, subjects)
    }

    register(subject) {
        this.subjects.push(subject)
    }
}

class Teacher extends User {
    constructor(name, age, subjects) {
        super(name, age, subjects)
    }  
    
    greet() {
        console.log(`Hello, I am Teacher ${this.name}!`)
    }
}

const studentA = new Student('Yap', 50, ['Math', 'Science'])
const studentB = new Student('Kaiz', 40, ['English', 'History'])
const teacherC = new Teacher('Deric', 45, ['Math', 'History'])

console.log(studentA.subjects)
studentA.register('Geography')
console.log(studentA.subjects)

studentA.greet()
studentB.greet()
teacherC.greet()