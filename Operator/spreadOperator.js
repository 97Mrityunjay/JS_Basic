// var returnedValue = Math.max(2,4,6,8,9);
// console.log(returnedValue);
// const myObj = {};
// Object.assign(myObj,{1: 'a', 2:'b', 3:'c'}, {6: 'z',5:'y', 4:'x'});
// console.log(myObj);
function sum(a,b,c)
{
    // console.log(a);
    // console.log(b);
    // console.log(c);
    return a+b+c;
}
let myArr = [2,3]
// console.log(sum(myArr[0],myArr[1],6));
console.log(sum(...myArr,6)); // spread operator
const user = {
      name : "Mrityunjay",
      courseCount : 3,
      role : "admin"
}
console.log(user);
const users = user;
const myUser = {...user, role: "user"};
console.log(myUser);
users.role = "user";
console.log(user);
let myA = [[4,5,6,7], ...[2,3,4,5]];
console.log(myA); //output : [[4,5,6,7] , 2,3,4,5]
let myArray =[...[4,5,6,7], ...[8,9,10,11]];
console.log(myArray); //output: [4,5,6,7,8,9,10,11]
const obj = {...myUser, name : "Mrityunjay Kumar Jha"};
console.log(obj);