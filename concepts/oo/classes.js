/**
 * 
 * Pre-ES6 and ES6 class constructors look similar, main difference is noticed
 * when it comes to inheritence
 * 
 */
// Let's say we are trying to subclass a Person class

function Person(name) {
  this.name = name;
}

// Pre ES6 class
function Student(name, studentId) {
  // Call Person constrcutor: 
  Person.call(this, name);
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student

var student = new Student('Michael', 23424);

console.log(student instanceof Person) // true

// ES6

class ES6Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
var es6Student = new ES6Student('Michael ES6', 555555)
console.log(es6Student instanceof Person) // true

