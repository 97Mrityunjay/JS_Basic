const states = ["Bihar", "Rajasthan", "Punjab", "Uttar Pradesh", "Kerala", "Maharashtra"];
// console.log(states);
states[0]= "Karnatka";
// console.log(states);

const user = ["mrityunjay", "mritunjayku99@gmail.com", 3, 34, true];

console.log(user);
console.log(user.length);
console.log(user.unshift("mrityunjay kumar jha"));
console.log(user);
// console.log(user.shift());
// console.log(user);

let arr = [1,3,4,6,8,12];
let res = arr.find((ele)=>{
    return ele>4;
})
console.log(res);

