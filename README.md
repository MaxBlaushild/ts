![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Introduction to TypeScript

![TypeScript Logo](https://cdn-images-1.medium.com/max/622/1*grk7btEn0OJEQRKgG2Qs2A.png)

## Introduction

An introduction to yet another 'script' to add to your arsenal.

## Objectives

By the end of this lesson, students should be able to:

- Explain the relationship between ES6 and TypeScript
- Use the TypeScript compiler to transpile TypeScript
- Understand what type definitions are and why they are necessary
- Read and write TypeScript code that employs typing
- Use classes and interfaces to make their code more readable and maintainable

## What is TypeScript?

TypeScript is an open-sourced programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning that **any existing valid JavaScript program is also a valid TypeScript program.** TypeScript transcompiles to JavaScript, so **it can be run in both browsers and serverside.**

### "TS as a superset of JS"

This phrase is just a fancy way to say that TypeScript includes all of the types, semantics and functionality of JavaScript while adding a few bells and whistles of its own.

![TypeScript superset of JavaScript](http://alexander.holbreich.org/content/images/2016/01/typescript-es6-es5.png)

So why bother with TypeScript? It turns out that some of those extra bells and whistles are extremely useful! A few new features TypeScript brings to the table are:

- Type Annotations

- Classes

- Interfaces

All three of these features will be important to us as we dive into Angular 2, so let's learn them!

## Getting started

First off, we need to globally install the TypeScript compiler. We can do this through npm:

```bash
npm install typescript -g
```

What did we just install? This program will read our TypeScript, interpret it, and turn it into JavaScript (ES5). Pretty neat, right? Since our finished product is JavaScript, it can be run in browsers.

![Transpiling](https://i1.wp.com/www.mithunvp.com/wp-content/uploads/2016/02/transpiling.png)

Let's try it out!

Take a look at **hello.ts.** You should see this:

```typescript
function sayHello() {
  console.log('Hello! This syntax seems familiar . . . .');
}

sayHello();
```

Looks just like JavaScript, right? Let's see what happens when we run it through the TypeScript compiler. Go to your terminal and run:

```bash
tsc hello.ts
```

. . . and look around in your repo. You should see the exact same file with a ".js" extension. Not exactly novel, but we're on the way to doing more exciting things with TypeScript.

### Type Annotations

TypeScript is a static, weakly-typed. It is staticly typed because **we can declare the types of our variables and properties which are enforced at compile time**, and it is weakly typed because **we can also choose not to.** What does this mean?

Let's take a look at **pointProclaimer.ts:**

```typescript
function sayPointsScored(points: number): void {
  let lebronJamesMutiplier = 1000;
  let pointsScored = points * lebronJamesMutiplier;
  let proclamation = `Lebron James scored ${pointsScored} points!`;
  console.log(proclamation);
}

let pointsScored = 9000;

sayPointsScored(pointsScored);
```

With this colon syntax, we are telling both the compiler and our fellow coders exactly what type our variables are, and more importantly, what type of argument our function expects. When we run this code through our compiler, we get:

```javascript
function sayPointsScored(points) {
    var lebronJamesMutiplier = 1000;
    var pointsScored = points * lebronJamesMutiplier;
    var proclamation = "Lebron James scored " + pointsScored + " points!";
    console.log(proclamation);
}
var pointsScored = 9000;
sayPointsScored(pointsScored);

```

 . . . the same exact same thing minus the type annotations. What the hell?! Why even bother? Let's go back and change the value of pointsScored to 'a billion' and see what happens.

 BAM. Our compiler yells at us, and doesn't produce our JavaScript file. It's saving us from making mistakes. If we remove the type annotation from the argument, compile again, and run the JavaScript script with node, we get Lebron James scoring a very ugly point total.

### Classes

 Classes are the main tool for organization in OOP. You guys touched on classes back in rubyland, and classes already exist in ES6, but TypeScript grants us a few more useful keywords when working with them.

 **Let's code together.**

 Please open the empty **animals.ts** file. We're going to craft some animals in a moment here. Let's start with a bunny:

 ```typescript
class Bunny {
  public name: string;
  public isAGoodBoy: boolean;
  public numberOfPets: number;
  private pregnant: boolean;
  constructor(name: string, pregnant: boolean) {
    this.name = name;
    this.pregnant = pregnant;
    this.isAGoodBoy = false;
    this.numberOfPets = 0;
  }
}

const fluffy = new Bunny('Fluffy', true);
```

Here we have a class with two properties and a constructor. The constructor works the same as the "initialize" function we used in Ruby when creating a new class instance. We type both the arguments, then assign them to the correspondingly named properties of the class. Notice the keywords before each property of the class.

**public** means that this property is exposed to code that exists **outside of the scope of our class or instance**.

**private** means that this property is only available to code that exists within the scope of our class or instance.

We don't want weirdos to be able alter the bunny's pregnancy (not gonna touch that one), but we DO want other code to check whether or not our bunny is pregnant. One way to accomplish this is with an **instance method.** 

```typescript
isPregnant() {
  return this.pregnant;
}
```

We had to cut the much more explicit version of this using getters and setters, but we encourage you to [take a look at the documentation](https://www.typescriptlang.org/docs/handbook/classes.html).

Finally, you can add **static properties** to your classes in TypeScript. These are properties that exist **on the class itself**. In Javascript, since classes are glorified constructor functions, and functions are objects, you would do something like this: 

```javascript
Bunny.numberOfLegs = 4
```

You can do the same thing with TypeScript, since TypeScript is a superset of JavaScript, but the semantic way is this:

```typescript
class Bunny {
  static numberOfLegs = 4;
  public name: string;
  public isAGoodBoy: boolean;
  public numberOfPets: number;
  private pregnant: boolean;
  constructor(name: string, pregnant: boolean) {
    this.name = name;
    this.pregnant = pregnant;
    this.isAGoodBoy = false;
    this.numberOfPets = 0;
  }
}
```

### Interfaces

Now that we have the basics of typing in TypeScript down, we can really get cooking.

An interface is a type commonly found in programming languages. It allows us **to define a data contract that our peers must adhere by when interacting with our code.**

Let's look at **pettable.ts** for some examples.

At the top of the file, you should see an interface and function:

```typescript
interface Pettable {
  numberOfPets: number;
  isAGoodBoy: boolean;
}

function pet(animal: Pettable) {
  animal.numberOfPets++;
  animal.isAGoodBoy = true;
}
```

We define the contract that it takes for an object to be pettable, then, with our typing, say that an object must be pettable to be petted.

Now lets make some animals to pet.

In the **animals.ts** file, let's create an elephant class: 

```typescript
class Elephant {
  public name: string;
  public isAGoodBoy: boolean;
  public numberOfPets: number;
  public peanuts: Array<Peanut>
  constructor(name: string) {
    this.name = name;
    this.isAGoodBoy = false;
    this.numberOfPets = 0;
    this.peanuts = [new Peanut()];
  }

  toot() {
    console.log('TOOT TOOT!');
  }
}

class Peanut {
  public numberOfNuts: number;
  constructor() {
    this.numberOfNuts = 2
  }
}
```

This class is a lot meater than our bunny class.

Next, let's add a non-classed stray animal to our menagerie:

```typescript
const stray = {
  numberOfPets: 0,
  isAGoodBoy: true,
  legs: 3
};
```

Now we can export our two classes and our object so we can use them in our **pettable.ts** file:

```typescript
export { Bunny, Elephant, stray }; 
```
 . . . and import them at the top of **pettable.ts**.

 ```typescript
 import { Bunny, Elephant, stray } from "./animals";
 ```

Since we have all of our classes in the right place now, we can instantiate some instances:

```typescript
const fluffy = new Bunny('fluffy', false)
const dumbo = new Elephant('dumbo');
```

. . . and attempt to pet all three of our animal objects:

```typescript
pet(fluffy);
pet(stray);
pet(dumbo);
```

SUCCESS!

Even though our three animals all have different classes, or don't have any class at all, they can still all be petted because they have the right properties to conform to the Pettable protocol.

### Lab: Make it compile

**battle.ts** is very broken. Using what we just learned, and the compiler feedback, fix the file until it compiles cleanly. Bonus points for making Lebron James win the battle.

## Additional Resources

-   [TypeScript Documentation](https://www.typescriptlang.org/docs/tutorial.html)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.




