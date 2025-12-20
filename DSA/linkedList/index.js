class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return "Empty list!!";
    }

    let temp = this.head;
    let prev = this.head;

    // If there is more than one node
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // If list becomes empty after pop
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return `Empty list!!`;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return `Empty list!!`;
    } else {
      return this.tail;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let temp = this.head;
    let counter = 0;

    while (counter < index) {
      temp = temp.next;
      counter++;
    }

    return temp;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value){
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;

  }

  size(){
    return this.length;
  }

  clear(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

    
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(6);
myLinkedList.push(8);
// console.log(myLinkedList.pop())
// myLinkedList.unshift(65)
// console.log(myLinkedList.shift())

// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.get(2));

// console.log(myLinkedList.set(1, 24));
// console.log(myLinkedList.insert(1,40));
// console.log(`Size: ${myLinkedList.size()}`);
myLinkedList.clear();
console.log(myLinkedList);

