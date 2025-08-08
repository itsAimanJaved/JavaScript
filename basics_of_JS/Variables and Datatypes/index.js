// Variables in JavaScript

// Using var (function-scoped, can be redeclared)
var name = "Aiman";
var name = "Sara"; // Redeclaration allowed
console.log(name);

// Using let (block-scoped, cannot be redeclared)
let age = 20;
age = 21; // Allowed
console.log(age); 

// Using const (block-scoped, cannot be reassigned)
const country = "Pakistan";
// country = "India"; //  Error
console.log(country); 


// JavaScript Data Types

// Primitive Types
let stringType = "Hello";           // String
let numberType = 42;                // Number
let booleanType = true;              // Boolean
let undefinedType;                   // Undefined
let nullType = null;                 // Null
let symbolType = Symbol("id");       // Symbol
let bigIntType = 123456789012345678901234567890n; // BigInt

console.log(typeof stringType);  // "string"
console.log(typeof numberType);  // "number"
console.log(typeof booleanType); // "boolean"
console.log(typeof undefinedType); // "undefined"
console.log(typeof nullType); // "object" (JS quirk)
console.log(typeof symbolType); // "symbol"
console.log(typeof bigIntType); // "bigint"

// Non-Primitive Types
let arrayType = [1, 2, 3];
let objectType = { name: "Aiman", age: 20 };
let functionType = function() { return "Hello World"; };

console.log(typeof arrayType);    // "object"
console.log(typeof objectType);   // "object"
console.log(typeof functionType); // "function"

