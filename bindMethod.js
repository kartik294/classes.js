//20 different examples to illustrate various use cases of the bind method:
//1. Changing the Context:
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const tom = {
  name: "Tom",
};

const tomGreet = person.greet.bind(tom);
tomGreet(); // Outputs: "Hello, Tom"
//2Creating a Reusable Function:
const greetJohn = person.greet.bind({ name: "John" });
const greetTom = person.greet.bind({ name: "Tom" });

greetJohn(); // Outputs: "Hello, John"
greetTom(); // Outputs: "Hello, Tom"
//3 Presetting Function Arguments:

function multiply(x, y) {
  return x * y;
}

const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(5)); // Outputs: 10

//Delayed Function Execution:

function delayedGreet(name) {
  console.log(`Hello, ${name}`);
}

const delayedTomGreet = delayedGreet.bind(null, "Tom");
setTimeout(delayedTomGreet, 1000); // Outputs: "Hello, Tom" after a 1-second d
//5Event Handling with bind:
const button = document.getElementById("myButton");
//const person = {
//   name: "John",
//   greet: function () {
//     console.log(`Hello, ${this.name}`);
//   },
// };

button.addEventListener("click", person.greet.bind(person));

//6Creating a Method for an Object:
const customObject = {
  value: 42,
  addValue: function (x) {
    return this.value + x;
  },
};

const method = customObject.addValue.bind(customObject, 8);
console.log(method()); // Outputs: 50

//7Currying with bind:
function multiply(x, y) {
  return x * y;
}

//const multiplyByTwo = multiply.bind(null, 2);
const multiplyByThree = multiply.bind(null, 3);

const double = multiplyByTwo(5); // Outputs: 10
const triple = multiplyByThree(5); // Outputs: 15

//8 Setting this for Asynchronous Callbacks:
class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    setTimeout(
      function () {
        this.value++;
        console.log(this.value);
      }.bind(this),
      1000
    );
  }
}

const counter = new Counter();
counter.increment(); // Outputs: 1 after 1 second
