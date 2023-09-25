let a = [1,2,3];
a.push(++a[2]);
console.log(a);
let a1 =[5,6,7,8];
let a3 = a1;
let a2 = [...a1];
a1[0]=4;
console.log(a1);
console.log(a2);
console.log(a3);
let a4 = [3,4,6,8,9];
a4[9]=12;
console.log(a4);
console.log(a4.length);
// a4.forEach((ele)=>console.log(ele));
for (let index = 0; index < a4.length; index++) {
    const element = a4[index];
    console.log(element);
}
