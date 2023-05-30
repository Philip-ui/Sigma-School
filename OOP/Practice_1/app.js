// 2 Characters: Student, Teacher
// Properties: name, age, subjects
// Method: greet(), .registerSubjects() -> student

class Student{
    constructor(name, age, subjects) {
        this.name = name
        this.age = age
        this.subjects = subjects
    }

    greet() {
        console.log(`Hello, I am ${this.name}! I am ${this.age} years old!`)
    }

    register(subject) {
        this.subjects.push(subject)
    }
}

class Teacher {
    constructor(name, age, subjects) {
        this.name = name
        this.age = age
        this.subjects = subjects
    }

    greet() {
        console.log(`Hello, I am ${this.name}! I am ${this.age} years old!`)
    }
}

const studentA = new Student('Yap', 50, ['Math', 'Science'])
const studentB = new Student('Kaiz', 40, ['English', 'History'])
const teacherC = new Teacher('Deric', 45, ['Math', 'History'])

console.log(studentA.subjects)
studentA.register('Geography')
console.log(studentA.subjects)