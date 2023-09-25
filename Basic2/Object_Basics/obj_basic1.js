// singleton
// Object.create

//object literals
const mySym = Symbol("key1");
// console.log(typeof mySym);
const JsUser = {
    name : "Mrityunjay",
    "full name" : "Mrityunjay Kumar Jha",
    age: 26,
    [mySym] : "myKey1",
    location: "Muzaffarpur",
    email: "mritunjay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email = "mritunjay@microsoft.com";
// Object.freeze(JsUser);

JsUser.greetingOne = function(){
    console.log("Hello JS User");
}
console.log(JsUser);

console.log(JsUser.greetingOne());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    // return `${this.name}`
}

console.log(JsUser.greetingTwo());
