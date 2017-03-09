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

