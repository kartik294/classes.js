class Person {
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of the class
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

// Using class methods
person1.greet(); // Outputs: "Hello, my name is John and I am 30 years old."
person2.greet(); // Outputs: "Hello, my name is Alice and I am 25 years old."

//2
class Student {
  // Parent class constructor with parameter
  constructor(name) {
    this.fullName = name;
  }

  // Parent class member method
  markAttendance() {
    console.log(this.fullName, "is present");
  }
}

class SportsCaptain extends Student {
  // Child class constructor with additional parameter
  constructor(name, sport) {
    super(name); // Call the parent class constructor
    this.sport = sport;
  }

  // Child class member method
  playSport() {
    console.log(this.fullName, "is playing", this.sport);
  }
}

// Creating instances of the classes
const student1 = new Student("John");
const captain1 = new SportsCaptain("Tom", "football");

// Using class methods
student1.markAttendance(); // Outputs: "John is present"
captain1.markAttendance(); // Outputs: "Tom is present"
captain1.playSport(); // Outputs: "Tom is playing football"

//3
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name + " is Present");
  }
}

// Creating instances of the Employee class
const employee1 = new Employee("Vivek", "HR");
const employee2 = new Employee("Sarah", "Finance");

// Using the markPresent method
employee1.markPresent(); // Outputs: "Vivek is Present"
employee2.markPresent(); // Outputs: "Sarah is Present"
