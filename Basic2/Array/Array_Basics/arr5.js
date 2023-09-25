const marvel_heros = ["spiderman", "thor", "Ironman"];
const dc_heros = ["Superman", "Batman", "flash"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

// const another_array = [1, 4, 5, [6,7], [8, 9, [5,2]], 10];
// const run_another_array = another_array.flat(2);
// const run_another_array = another_array.flat(Infinity);
// console.log(run_another_array);

// console.log(Array.isArray("Mrityunjay"));
// console.log(Array.from("mrityunjay"));
// console.log(Array.from({"name" : "mrityunjay"}));

console.log(Array.of({"name" : "mrityunjay", "id" : 12}));
console.log(Array.of("mrityunjay", "kumar", "jha"));
console.log(Array.of(...[4,5,6,7,8,9, ...[1,5,3,2]]));
console.log(...[4,5,6,7,8,9, ...[1,5,3,2]]);
