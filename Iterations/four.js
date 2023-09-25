const myObject = {
   js: "JavaScript",
   cpp: "C++",
   rb: "Ruby",
   swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "python", "java", "cpp"];

for (const key in programming) {
   console.log(`key is ${key} and value is ${programming[key]}`);
}

const map = new Map();
map.set("In", "India");
map.set("USA", "United State Of America");
map.set("FR", "France");

// for (const [key, value] in map) { 
//     console.log(key + ":-" + value);
// }

