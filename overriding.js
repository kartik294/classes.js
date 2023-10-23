//Method Overriding:

// To override a method from the parent class in the child class, you define a method with the same name in the child class. This new method in the child class will replace the parent class method when called from instances of the child class.
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child"); // Overrides the parent class method
  }

  customMethod() {
    console.log("This is a custom method of Child");
  }
}

const childObj = new Child();
childObj.greet(); // Outputs: "Hello from Child" (Method overriding)
childObj.customMethod(); // Outputs: "This is a custom method of Child"
//2
// When a child class extends a parent class in object-oriented programming, it inherits all the members (properties and methods) of the parent class. However, a child class can override methods and properties from the parent class and define its own members as well. This is a fundamental concept in object-oriented programming known as polymorphism and class inheritance.

// Here's how a child class can override and define its own members:

// Method Overriding:

// To override a method from the parent class in the child class, you define a method with the same name in the child class. This new method in the child class will replace the parent class method when called from instances of the child class.

// javascript
// Copy code
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from Child"); // Overrides the parent class method
  }

  customMethod() {
    console.log("This is a custom method of Child");
  }
}

// const childObj = new Child();
// childObj.greet();         // Outputs: "Hello from Child" (Method overriding)
// childObj.customMethod();  // Outputs: "This is a custom method of Child"
// Adding New Members:

// A child class can
//  define its own properties and methods in addition to those inherited from the parent class. These new members are specific to the child class and are not available in the parent class or other child classes that might extend the same parent class

class Parent {
  parentProperty = "I'm from Parent";
  parentMethod() {
    console.log("Method from Parent");
  }
}

class Child extends Parent {
  childProperty = "I'm from Child";
  childMethod() {
    console.log("Method from Child");
  }
}

//   const childObj = new Child();
//   console.log(childObj.parentProperty); // Outputs: "I'm from Parent"
//   console.log(childObj.childProperty);  // Outputs: "I'm from Child"
//   childObj.childMethod();               // Outputs: "Method from Child"
//3
class Parent {
  constructor() {
    this.Parent1 = "This is a new method";
  }

  ParentMethod() {
    console.log("This is another 1st new method");
  }
}

class Child extends Parent {
  constructor() {
    super(); // Call the constructor of the parent class
    this.Child1 = "This is a child function";
  }

  ChildMethod() {
    console.log("This is not a child function");
  }
}

const childMethod1 = new Child();
console.log(childMethod1.Parent1);
console.log(childMethod1.Child1);
childMethod1.ParentMethod();
childMethod1.ChildMethod();
//5
class Parent {
  constructor(name) {
    this.fullName = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the constructor of the parent class with the 'name' parameter

    // Initialize members specific to the Child class
    this.age = age;
  }
}

//   const childObj = new Child("Alice", 25);

console.log(childObj.fullName); // Outputs: "Alice"
console.log(childObj.age); // Outputs: 25

//7
class Parent {
  constructor(name) {
    this.fullName = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the constructor of the parent class with the 'name' parameter

    // Initialize members specific to the Child class
    this.age = age;
  }
}

// const childObj = new Child("Alice", 25);

console.log(childObj.fullName); // Outputs: "Alice"
console.log(childObj.age); // Outputs: 25
