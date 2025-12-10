class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.length === 0) return undefined;

    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const item = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }

  getData(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }
}

const newArray = new MyArray();

// Adding value
newArray.push("gym");
newArray.push("Cricket");
newArray.push("Football");
newArray.push("Hockey");
console.log(newArray);

// Getting Value
let data = newArray.getData(1);
console.log(`The second item is ${data}`);

// Removing data
const removedItem = newArray.pop();
console.log(`Removed Data : ${removedItem}`);
console.log(newArray);

// Removing first data
const removedFirstItem = newArray.shift();
console.log(`Removed First Item : ${removedFirstItem}`);
console.log(newArray);

// Removing custom data using index
let customData = newArray.delete(1);
console.log(`Removed Item: ${customData}`);
console.log(newArray);
