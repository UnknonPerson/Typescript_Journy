//Type "Anotations": TypeScript allows you to explicitly specify the types of variables, function parameters, and return values. 
// This helps catch errors at compile time and provides better tooling support in editors. 
// For example, you can specify that a variable should be of type string, and if you try to assign a number to it, TypeScript will give you an error.

let drink = "Water"; // TypeScript infers the type as string
// drink = 42; // This will cause a compile-time error because drink is inferred as a string

//it Inferes the type of the variable based on the assigned value. 
// In this case, TypeScript infers that the type of drink is string because it is assigned a string value. 
// If you try to assign a value of a different type, such as a number, TypeScript will give you an error because it expects a string.

let cup = Math.random() > 0.5 ? 45 : "Coffee"; // TypeScript infers the type as string | number
// cup = true; // This will cause a compile-time error because cup is inferred as string | number

//"inference" is a powerful feature of TypeScript that allows it to automatically determine the types of variables and expressions based on their usage. 
// In this example, TypeScript infers that the type of cup is string | number because it can be either a number (45) or a string ("Coffee") depending on the result of Math.random(). 
// If you try to assign a value of a different type, such as a boolean, TypeScript will give you an error because it expects a string or a number.