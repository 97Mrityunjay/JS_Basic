// for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";
for(const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("In", "India");
map.set("USA", "United State Of America");
map.set("FR", "France");

for (const [key, value] of map) {
    // console.log(key);
    console.log(`${key} => ${value}`);
}

// const myObject = {
//     game1: "NFS",
//     game2: "Spiderman"
// }

// for (const [key, value] of myObject) {
    
//     console.log(`${key} :- ${value}`);
// }