/**
 * @Title: Initialize array - Literal
 */


// Array Literal
const arr1 = [];
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
arr1[99] = 100;
console.log(arr1.length);
console.log(arr1);

// Length = LastIndex + 1
// length = Length - 1

const names = ["Nayan", "Sarkar", "Ripon", "Keya", "Shiuli", "Kartick"]
// names[5] = "Raju";
names[names.length] = "Raju";
console.log(names.length);
console.log(names);