/**
 *   Abstraction
 */

// interface Shape {
//     area():number,
//     perimeter():number
// }

// class Circle implements Shape{
//     constructor(private radius:number){}

//     area(): number {
//         return Math.PI * this.radius * this.radius
//     }

//     perimeter(): number {
//         return 2 * Math.PI * this.radius
//     }
// }

// class Rectangle implements Shape{
//     private width:number
//     private height: number
//     constructor(width:number,height: number){
//         this.width = width,
//         this.height = height
//     }

//     area(): number {
//         return this.width * this.height;
//     }

//     perimeter(): number {
//         return 2 * (this.width + this.height);
//     }
// }

// function calculateTotalArea(shape: Shape){
//     return shape.area()
// }

// const circle = new Circle(4)
// const rect = new Rectangle(2,3)

// console.log("Area Of Circle: ", calculateTotalArea(circle));
// console.log("Area Of Reactangle: ", calculateTotalArea(rect));


/**
 *  Encapsulation
 */
class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter method for balance
  public get balance(): number {
    return this._balance;
  }

  // Method to deposit money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }

  // Method to withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }
    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance:", myAccount.balance);


/**
 *  Polymorphism - Subtype / Inheritance
 */
// Define a base class 'Shape' with a common method 'area'
abstract class Shape {
  abstract area(): number;
}

// Define a 'Rectangle' class that extends the base class 'Shape'
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  // Override the 'area' method for 'Rectangle'
  area(): number {
    return this.width * this.height;
  }
}

// Define a 'Circle' class that extends the base class 'Shape'
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // Override the 'area' method for 'Circle'
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Create instances of 'Rectangle' and 'Circle'
const rect: Shape = new Rectangle(5, 4);
const circle: Shape = new Circle(3);

// Define a function to use the common interface for calculating the total area of an array of shapes
function getTotalArea(shapes: Shape[]): number {
  return shapes.reduce((totalArea, shape) => totalArea + shape.area(), 0);
}

// Use the getTotalArea function with an array of different shape objects
const totalArea = getTotalArea([rect, circle]);
console.log(`Total area of shapes: ${totalArea}`);

/**
 *  Polymorphism - Generic type
 */


// Define a generic function 'identity' that returns the input value
function identity<T>(value: T): T {
  return value;
}

// Use the 'identity' function with different data types
const numIdentity: number = identity<number>(42);
const strIdentity: string = identity<string>("Hello, TypeScript!");

console.log(`Number identity: ${numIdentity}`);
console.log(`String identity: ${strIdentity}`);

// Define a generic class 'Pair' that can store two values of the same type
class Pair<T> {
  constructor(public first: T, public second: T) {}

  // Swap the first and second values
  swap(): void {
    const temp = this.first;
    this.first = this.second;
    this.second = temp;
  }
}

// Use the 'Pair' class with different data types
const numPair: Pair<number> = new Pair(1, 2);
const strPair: Pair<string> = new Pair("Alice", "Bob");

numPair.swap();
strPair.swap();

console.log(`Number pair after swap: (${numPair.first}, ${numPair.second})`);
console.log(`String pair after swap: (${strPair.first}, ${strPair.second})`);

/**
 *  Inheritance
 */
// Base class: Animal
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

// Derived class: Dog, which inherits from Animal
class Dog extends Animal {
  constructor(name: string) {
    super(name);
    // Calls the constructor of the base class
  }

  bark() {
    console.log("Woof! Woof!");
  }

  // Overriding the move method from the Animal class
  move(distance: number = 5) {
    console.log("The dog is running...");
    super.move(distance);
    // Calls the move method of the base class
  }
}

const myDog = new Dog("Max");
myDog.bark();
// Output: Woof! Woof!
myDog.move();
// Output: The dog is running...
//         Max moved 5 meters.