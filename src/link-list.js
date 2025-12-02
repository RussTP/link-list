import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
         
        const newNode = new Node(value);
        if (this.head === null) {
            return this.head = newNode;
        } else {
             let current = this.head;
            while (current.nextNode != null) {
               current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.nextNode;
}

    }

    prepend(value) {
        const newNode = new Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
    }     


    size() {
        let count = 0;
        let current = this.head;
        while(current != null) {
            count ++;
            current = current.nextNode;
        }
            return count;
    }

    head() {

    }

    tail() {

    }

    at(index) {

    }

    contains(value) {

    }

    find(value) {

    }

    toString() {

    }
}

