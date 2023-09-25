// Primitive data types

// 7 primitive data types  : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = "mritunjayku99@gmail.com";

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 345672891387723114566n; 
// const score:number = 100; => in typescript we can declare variable like this

// Reference(Non-primitive) type:

// Array, Objects, Functions
const heros = ["Shaktiman", "nagraj", "doga"];
let myObj = {
    name : "mrityunjay",
    age : 26,
} 

const myFunction = function (){
     console.log("Hello world!");
}

console.log(typeof bigNumber);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-primitive)

let myWebsiteName = "mrityunjaykumardotcom";
let anotherWebsiteName = myWebsiteName;
anotherWebsiteName = "mrityunjaykumarjhadotcom"
console.log(myWebsiteName);
console.log(anotherWebsiteName);

const userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

const userTwo = userOne;
userTwo.email = "mrityunjay@google.com";
console.log(userOne.email);
console.log(userTwo.email);