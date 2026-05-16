//TypeScript is a superset of JavaScript that adds static types to the language. 
// It allows developers to catch errors at compile time and provides better tooling and code completion. 
// In this article, we will cover some of the basic concepts of TypeScript.

//1. Types: TypeScript has a variety of built-in types, including string, number, boolean, array, tuple, enum, and any. 
// You can also create your own custom types using interfaces and classes.

//2. Variables: In TypeScript, you can declare variables using the let and const keywords. 
// The let keyword allows you to declare a variable that can be reassigned, while the const keyword declares a variable that cannot be reassigned.
//3. Functions: TypeScript allows you to define functions with typed parameters and return types. 
// This helps catch errors when calling the function with the wrong types of arguments or when returning the wrong type of value.

//4. Interfaces: Interfaces in TypeScript are used to define the shape of an object. 
//They can be used to define the properties and methods that an object should have,
// and they can be implemented by classes or used as types for variables and function parameters.

//5. Classes: TypeScript supports object-oriented programming with classes. 
// You can define classes with properties and methods, and you can create instances of those classes. 
// TypeScript also supports inheritance, allowing you to create subclasses that inherit properties and methods from a parent class.

//6. Modules: TypeScript has a module system that allows you to organize your code into separate files and import/export functionality between them. 
// This helps keep your code organized and makes it easier to manage larger projects.

//7. Type Inference: TypeScript has a powerful type inference system that can automatically determine the types of variables and expressions based on their usage. 
// This means that you don't always have to explicitly declare types, as TypeScript can often infer them for you.

//8. Type Assertions: TypeScript allows you to assert the type of a variable or expression using the as keyword.
// This can be useful when you know more about the type of a value than TypeScript does, or when you want to override the inferred type.

//9. Generics: TypeScript supports generics, which allow you to create reusable components that can work with different types. 
// Generics enable you to write functions and classes that can operate on a variety of types while still maintaining type safety.

//10. Decorators: TypeScript supports decorators, which are a way to add metadata and modify the behavior of classes, methods, properties, and parameters.
// Decorators can be used for various purposes, such as logging, validation, and dependency injection.

//These are just some of the basic concepts of TypeScript.
// TypeScript provides many more features and capabilities that can help you write better and more maintainable code. 
// If you're new to TypeScript, it's a good idea to start with the basics and gradually explore the more advanced features as you become more comfortable with the language.


//-------------------------------------------------------------------------------------------------------------------------

//TypeScripte is converted to JavaScript before it can be run in a browser or on a server.
// This process is called transpilation, and it allows developers to write code in TypeScript while still being able to run it in environments that only support JavaScript. 
// The TypeScript compiler (tsc) is used to transpile TypeScript code into JavaScript. 
// You can configure the compiler options to specify the target JavaScript version and other settings. 
// Once the TypeScript code is transpiled, you can run the resulting JavaScript code in any environment that supports JavaScript, such as a web browser or Node.js.

//In summary, TypeScript is a powerful language that adds static types to JavaScript, providing better tooling and error checking. 
// It is transpiled to JavaScript before it can be run, allowing developers to write code in TypeScript while still being able to run it in environments that only support JavaScript. 
// If you're new to TypeScript, it's a good idea to start with the basics and gradually explore the more advanced features as you become more comfortable with the language.

//Note: The above code is a general overview of TypeScript and its features.

//----------------------------------------------------------------------------------------------------------------------------------

function greet(name: string): string {
    return `Hello, ${name}!`;
}

// const message = greet(42); This will cause a type error because 42 is not a string
const message: string = greet("World");
console.log(message); // Output: Hello, World!

const username: string = "Tanish";

console.log(greet(username)); // Output: Hello, Tanish!

