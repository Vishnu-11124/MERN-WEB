// for in loop is used to iterate over the properties of an object

// for (let variable in object) {
//     // code to be executed
// }

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Output:
// name: John
// age: 30
// city: New York

// array can also be iterated using for...in loop, but it's not recommended as it iterates over all enumerable properties, including inherited properties and non-numeric keys.

const arr = [10, 20, 30];
for (let index in arr) {
    console.log(index + ": " + arr[index]);
}

// Output:
// 0: 10
// 1: 20
// 2: 30

// Note: The for...in loop iterates over all enumerable properties of an object, including inherited properties. To filter out inherited properties, you can use the hasOwnProperty() method.

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

// Output:
// name: John
// age: 30
// city: New York