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

    getHead() {
        return this.head;

    }

    getTail() {
        let tail = this.head;
        while(tail.nextNode != null) {
           tail = tail.nextNode;
        }
        return tail;
    }

    at(index) {
       let current = this.head;
       let counter = 0;

       while (counter < index) {
        counter ++;
        current = current.nextNode;
       }
       return current;
    }

    pop() {
        if (this.head === null) return;

        if(this.head.nextNode === null) {
            this.head = null;
            return;
} 
    let current = this.head;
    while (current.nextNode.nextNode != null) {
            current = current.nextNode;
        }
           return current.nextNode = null;
    }
    

    contains(value) {
        let current = this.head;
        while (current != null) {
        if(current.value === value) {
            return true;
          }
        current = current.nextNode;
        }
    return false;

    }


    find(value) {
        let index = 0;
        let current = this.head;

        while (current != null) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index ++
        }
        return null;

    }

    toString() {
        let stringResult = "";
        let current = this.head;
        while (current != null) {
            stringResult += `(${current.value}) ->`;
            current = current.nextNode;
        }
        stringResult += "null";
        return stringResult;
    }
}