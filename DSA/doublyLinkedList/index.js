class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        if(!this.head){
            this.head = new Node(value)
            this.tail = this.head
        }else{
            const newNode = new Node(value)
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
    }

    pop(){

        let temp = this.tail
        
        if(!this.head){
            return undefined
        }

        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }

        this.length--
        return temp
    }

    unshift(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++

    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        const removedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.push(6)
// console.log(myLinkedList.pop())
myLinkedList.unshift(5)
console.log(myLinkedList.shift())
console.log(myLinkedList)