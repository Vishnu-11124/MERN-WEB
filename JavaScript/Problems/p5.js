// Create an object and modify its properties


let cars = {
    type : "Fiat",
    model : "500",
    color : "white"
}

console.log(`Type of car is : ${cars.type}`);
cars.type = "Volvo";
console.log(`Updated type of car is : ${cars.type}`);
cars.tyres = 4; 
console.log(`Number of tyres are : ${cars.tyres}`);
console.log(cars);