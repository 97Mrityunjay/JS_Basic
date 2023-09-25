const arr = [4,8,9,2,3,6,10,12,14,15];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

arr.forEach((element, index) => {
    console.log(`index is ${index} and value is ${element}`);
   
});

arr.fill(5,0,2);
console.log(arr);
let arr3 = arr.filter((value)=>(value<10));
console.log(arr3);
let res = arr.includes(5);
console.log(res);
let arr4 = arr.find((value)=>(value>10));
console.log(arr4);

for (const iterator of [2,3,4]) {
    console.log(iterator);
}
for (const value of "Mrityunjay") {
    console.log(value);
}
const object = {
    name: "Mrityunjay",
    id: 4,
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
    }
}

