//
class Employee {
  constructor(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: $${this.salary}`);
  }
}

// Example usage:
const employee1 = new Employee("John Doe", "Engineering", 75000);
employee1.displayInfo();

//Manager and Regular Employee:

// Here's a class Employee with properties name and role. Some employees are managers, and they have an additional property subordinates, which is an array of regular employees they manage:
class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    if (this.subordinates.length > 0) {
      console.log("Subordinates:");
      this.subordinates.forEach((subordinate) => {
        console.log(`- ${subordinate.name}`);
      });
    }
  }
}

// Example usage:
// const manager = new Employee("Alice", "Manager");
// const employee1 = new Employee("John", "Employee");
// const employee2 = new Employee("Jane", "Employee");

manager.addSubordinate(employee1);
manager.addSubordinate(employee2);

manager.displayInfo();
//3Here's a class Employee with common properties like name and department, and two subclasses, Manager and Engineer, each with their own unique properties and a method to display their information:
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
  }
}

class Manager extends Employee {
  constructor(name, department, numberOfSubordinates) {
    super(name, department);
    this.numberOfSubordinates = numberOfSubordinates;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Number of Subordinates: ${this.numberOfSubordinates}`);
  }
}

class Engineer extends Employee {
  constructor(name, department, programmingLanguage) {
    super(name, department);
    this.programmingLanguage = programmingLanguage;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Programming Language: ${this.programmingLanguage}`);
  }
}

// Example usage:
const manager = new Manager("Alice", "Management", 5);
const engineer = new Engineer("Bob", "Engineering", "JavaScript");

manager.displayInfo();
engineer.displayInfo();
//4
// Employee Class with Benefits:

// Extending the Employee class to include a benefits array and a method to display the employee's name and list of benefits:
class Employee {
  constructor(name, department, benefits) {
    this.name = name;
    this.department = department;
    this.benefits = benefits || [];
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log("Benefits:");
    this.benefits.forEach((benefit) => {
      console.log(`- ${benefit}`);
    });
  }
}

// Example usage:
//   const employee1 = new Employee("John Doe", "Engineering", ["Health Insurance", "401(k)"]);
//   employee1.displayInfo();
//5Employee Time Tracking:

// Enhancing the Employee class to track the employee's working hours, including properties for name, department, and hoursWorked, along with a method to calculate and display the employee's total hours worked in a given week:
class Employee {
  constructor(name, department, hoursWorked) {
    this.name = name;
    this.department = department;
    this.hoursWorked = hoursWorked || [];
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
  }

  calculateTotalHoursInWeek() {
    const totalHours = this.hoursWorked.reduce((sum, hours) => sum + hours, 0);
    return totalHours;
  }

  displayTotalHoursInWeek() {
    const totalHours = this.calculateTotalHoursInWeek();
    console.log(`Total Hours Worked in the Week: ${totalHours} hours`);
  }
}

// Example usage:
// const employee1 = new Employee("John Doe", "Engineering", [8, 8, 7, 9, 8]);
// employee1.displayInfo();
// employee1.displayTotalHoursInWeek();

//6
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(`${this.name} is present`);
  }
}

class Developer extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  submitCode() {
    console.log(`Code is submitted by ${this.name}, ${this.department}`);
  }
}

//   const employee1 = new Developer("Vikas", "CBC");
//   employee1.markPresent();
//   employee1.submitCode();
