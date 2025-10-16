

let dataMap = new Map();

dataMap.set('a', 1);
dataMap.set('b', 2);
dataMap.set('c', 3);
dataMap.set('d', 4);

console.log(dataMap.get('a')) // Output: 1

console.log(dataMap.size()) // Output: 4

dataMap.delete('d');

console.log(dataMap.has('d')) // Output: false
console.log(dataMap.size()) // Output: 3