// conversion into number
let score = "mrityunjay";
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" =>33
// "33abc" => NaN
// true => 1; false => 0

// conversion into boolean
let isLoggedIn = "mrityunjay";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false 
// "mrityunjay" =>true 

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ************ Operations ********************

let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello";
let str2 = "Mrityunjay";
let str3 = str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3+4) * 5 % 3);

console.log(+true);
console.log(+"");

let counterNumber = 10
console.log(counterNumber++); //post-increment operator
console.log(++counterNumber+10); //pre-increment operator