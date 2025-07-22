var str = "1000";
var n = 10; // Convert string to number
// console.log(str * n); // 10000
// console.log(str + n); // 100010
// console.log(Number(str)); // 1000
// ********** Right way String to Number***********
// console.log(Number.parseInt(str)); // 1000

// ********** Right way Number to stringt***********
// console.log(n.toString()); // "10"

// ********** Right way Infinity to Number (Hobe na)***********
// console.log(Number(Infinity)); // Infinity

// ********** Right way Infinity to string (Hobe)***********
// console.log(String(Infinity)); // "Infinity"

// ********** Right way Infinity to Boolean (Hobe)***********
// console.log(Boolean(Infinity)); // true


// Falsy Values 
''
0
null
undefined
NaN

console.log(Boolean('')); // false
console.log(Boolean('Nayan')); // true 

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean(0)); // false
console.log(Boolean(451)); // true


console.log(true); // true
var a = true;
console.log(a.toString()); // "true"

// Constructor
String Number Boolean