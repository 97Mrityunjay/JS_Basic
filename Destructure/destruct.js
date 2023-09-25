// var user = ["mrityunjay", 3, "user"];
// console.log(user[2]);
// var [name, courseCount, role] = user;
// console.log(role);

// const myUser = {
//     name : "mrityunjay",
//     courseCount : 3,
//     role : "user"
// };
// console.log(myUser.role);
// const {name,courseCount,role} = myUser;
// console.log(role);
// const [a, b, c, ...rest] = [3, 4, 5, 6, 7, 8];
// console.log(rest);

const [a, b, c, ...rest] = [3,5,6, {name: "Mrityunjay", age : 26}, {name: "Ajay", age : 25},[8,9,10,23]];
console.log(rest);

// The destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables.


const users ={
   id : 42,
   displayName : "Mrityunjay",
   fullName : {
      firstName : "Mrityunjay Kumar",
      lastName : "Jha",
   },
}

function userId({id})
{
    return id;
}

console.log(userId(users));


//Object destructuring:
//Basic assignment
const user ={
    id : 5,
    userName : "Mrityunjay Kumar Jha",
    isVerified : true,
}
const {id, userName } = user;
console.log(id);
console.log(userName);

//Assignment to new variable names
//A property can be unpacked from an object and assigned to a variable with different name than the object property

const obj = {p: 40, q: true};
const {p: r, q: bar} = obj;

console.log(r);
console.log(bar);

// const arr = [2,3,5,7,11,13,17,19];
// console.log(...arr);

// const obj2 = {
//     "name": "mrityunjay kumar jha",
//     "email" : "mritunjayku99@gmail.com",
// }

// const {name, email} = {...obj2}
// console.log(name);
// console.log(email);