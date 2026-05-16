//any 
let value: any = "Hello, TypeScript!";
value = 42; // No compile-time error
// The any type allows you to assign any value to a variable without type checking.
// This can be useful in certain situations, such as when working with third-party libraries or when you need to temporarily disable type checking. 
// However, using any can lead to potential runtime errors and should be used with caution.

//Unknown
let unknownValue: unknown = "Hello, TypeScript!";
unknownValue = 42; // No compile-time error
// The unknown type is similar to any in that it can hold any value, but it is safer because it requires you to perform type checks before using the value.
// This means that you cannot directly use an unknown value without first checking its type, which helps prevent potential runtime errors. 
// The unknown type is a better choice than any when you want to allow for flexibility while still maintaining some level of type safety.

//difference between any and unknown
// The main difference between any and unknown is that any allows you to use the value without any type checks, while unknown requires you to perform type checks before using the value. 
// This means that with any, you can assign a value of any type and use it without restrictions, which can lead to potential runtime errors if you're not careful. 
// On the other hand, with unknown, you have to explicitly check the type of the value before using it, which helps prevent runtime errors and promotes safer code. 
// In general, it's recommended to use unknown instead of any whenever possible to maintain better type safety in your TypeScript code.

function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `You ordered a ${kind} chai.`;
    }
    return `You ordered a chai with strength level ${kind}.`;
}

//Type narrowing is the process of refining the type of a variable within a specific block of code based on certain conditions. 
// In the getChai function, we use the typeof operator to check if the kind variable is a string. 
// If it is, we return a message indicating that the user ordered a chai of that kind. 
// If it's not a string, we assume it's a number and return a message indicating the strength level of the chai. 
// This is an example of type narrowing, where we refine the type of kind based on the condition we check. 
// Type narrowing helps us write safer code by allowing us to handle different types appropriately based on their characteristics.

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    return "Serving default chai.";
}

//Thuthynessiness is a concept in TypeScript that refers to the idea that certain values are considered "truthy" or "falsy" when evaluated in a boolean context. 
// In the serveChai function, we check if the msg parameter is truthy. 
// If msg is provided and is a non-empty string, it will be considered truthy, and we will return a message indicating that we are serving that specific chai. 
// If msg is not provided or is an empty string, it will be considered falsy, and we will return a message indicating that we are serving the default chai. 
// Understanding truthiness is important when working with conditional statements in TypeScript, as it helps you determine how different values will be evaluated in boolean contexts.

function orderChai(size: "small" | "medium" | "large" | number){
    if(size ==="small"){
        return "You ordered a small chai.";
    }
    if(size ==="medium"){
        return "You ordered a medium chai.";
    }
    if(size ==="large"){
        return "You ordered a large chai.";
    }
    return `You ordered a chai with size ${size}.`;
}

//exustive checking is a technique used in TypeScript to ensure that all possible cases of a union type are handled in a switch statement or an if-else chain. 
// In the orderChai function, we have a parameter size that can be either a string literal ("small", "medium", "large") or a number. 
// To perform exhaustive checking, we would need to handle all possible cases for the size parameter. 
// This means that we would need to include cases for "small", "medium", "large", and any number that could be passed as an argument. 
// By doing this, we can ensure that our code is robust and can handle all possible inputs without leaving any cases unhandled, which helps prevent potential runtime errors.

class KulhadChai {
    serve(){
        return "Serving chai in a kulhad.";
    }
}
class CuttingChai {
    serve(){
        return "Serving cutting chai.";
    }
}

function serveChaiInKulhad(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    return chai.serve();
}

//The instanceof operator is used in TypeScript to check if an object is an instance of a specific class. 
// In the serveChaiInKulhad function, we use instanceof to check if the chai parameter is an instance of the KulhadChai class. 
// If it is, we call the serve method of the KulhadChai instance. 
// If it's not an instance of KulhadChai, we assume it's an instance of CuttingChai and call its serve method. 
// Using instanceof allows us to perform type narrowing based on the class of the object, which helps us write safer code by ensuring that we are calling methods on the correct types of objects.

//Guard checks are a way to narrow down the type of a variable based on certain conditions. 
// In the serveChaiInKulhad function, we use a guard check with instanceof to determine whether the chai variable is an instance of KulhadChai or CuttingChai. 
// This allows us to safely call the serve method on the appropriate class instance without risking a runtime error. 
// Guard checks are an essential part of type narrowing in TypeScript, as they help us ensure that we are working with the correct types of objects based on their characteristics or properties.

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any): obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

//The isChaiOrder function is a type guard function that checks if a given object conforms to the ChaiOrder type. 
// It takes an object of any type as a parameter and returns a boolean indicating whether the object is a ChaiOrder or not. 
// The function checks if the object is of type "object", is not null, and has the properties "type" (which should be a string) and "sugar" (which should be a number). 
// If all these conditions are met, the function returns true, indicating that the object is a ChaiOrder. 
// This type guard function can be used in conditional statements to narrow down the type of an object and safely access its properties without risking runtime errors.

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving a ${item.type} chai with ${item.sugar} sugar.`;
    }
    return `Serving a ${item} chai.`;
}

//In the serveOrder function, we use the isChaiOrder type guard function to check if the item parameter is of type ChaiOrder. 
// If it is, we can safely access the type and sugar properties of the item object and return a message indicating the type of chai and the amount of sugar. 
// If the item is not a ChaiOrder, we assume it's a string representing the type of chai and return a message indicating that we are serving that type of chai. 
// This approach allows us to handle different types of input while maintaining type safety and preventing potential runtime errors.

type MasalaChai = { type: "Masala", spices: number }
type AdrakChai = { type: "Adrak", gingerLevel: number }
type ElaichiChai = { type: "Elaichi", aroma: number }

type Chai = MasalaChai | AdrakChai | ElaichiChai;

function MakeChai(chai: Chai){
    switch(chai.type){
        case "Masala":
            return `Making a ${chai.type} chai with ${chai.spices} spices.`;
        case "Adrak":
            return `Making an ${chai.type} chai with ginger level ${chai.gingerLevel}.`;
        case "Elaichi":
            return `Making an ${chai.type} chai with aroma level ${chai.aroma}.`;
    }
}

//In the MakeChai function, we have a parameter chai that can be of type MasalaChai, AdrakChai, or ElaichiChai. 
// We use a switch statement to check the type property of the chai object and handle each case accordingly. 
// For each case, we can safely access the specific properties of the corresponding chai type (spices for MasalaChai, gingerLevel for AdrakChai, and aroma for ElaichiChai) without risking runtime errors. 
// This is an example of exhaustive checking, where we ensure that all possible cases of the Chai union type are handled in the switch statement, providing robust and type-safe code.

function brew(order: MasalaChai | AdrakChai | ElaichiChai){
    if("spices" in order){
        return `Brewing a ${order.type} chai with ${order.spices} spices.`;
    }
    if("gingerLevel" in order){
        return `Brewing an ${order.type} chai with ginger level ${order.gingerLevel}.`;
    }
    if("aroma" in order){
        return `Brewing an ${order.type} chai with aroma level ${order.aroma}.`;
    }
    return "Unknown chai order.";

}

//In the brew function, we use the in operator to check for the presence of specific properties in the order object to determine its type. 
// We check for the spicelevel property to identify if it's a masalaChai, gingerLevel for adrakChai, and aroma for elaichiChai. 
// This allows us to narrow down the type of the order object and safely access its properties without risking runtime errors. 
// Using the in operator is a common technique for type narrowing when working with union types that have different properties.