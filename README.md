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

- Interfaces

- Decorators

All three of these features will be important to us as we dive into Angular 2, so let's learn them!

## Getting started

First off, we need to globally install the TypeScript compiler. We can do this through npm:

```bash
npm install typescript -g
```

What did we just install? This program will read our TypeScript, interpret it, and turn it into JavaScript. Pretty neat, right? Since our finished product is JavaScript, it can be run in browsers.

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

Now that we've got the basics out of the way, we can really start cooking with TypeScript. 

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
    var proclamation = "Lebron James scored " + points + " points!";
    console.log(proclamation);
}
var pointsScored = 9000;
sayPointsScored(pointsScored);
```

 . . . the same exact same thing minus the type annotations. What the hell?! Why even bother? Let's go back and change the value of pointsScored to 'a billion' and see what happens.

 BAM. Our compiler yells at us, and doesn't produce our JavaScript file. It's saving us from making mistakes. If we remove the type annotation from the argument, compile again, and run the JavaScript script with node, we get Lebron James scoring a very ugly point total.


