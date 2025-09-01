/**
 * @title: Initialize array - Constructor vs Factory
 */

// Constructor Pattern 
const arr2 = new Array();
console.log(arr2, arr2.length);

const arr3 = new Array(10);
console.log(arr3, arr3.length);

const arr4 = new Array(1, 2, 3, 4, 5);
console.log(arr4, arr4.length);


// Factory Pattern
const b2 = Array();
console.log(b2, b2.length);

const b3 = Array(10);
console.log(b3, b3.length);

const b4 = Array(1, 2, 3, 4, 5);
console.log(b4, b4.length);

console.log(arr2.__proto__.constructor);
console.log(b2.__proto__.constructor);