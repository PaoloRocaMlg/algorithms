class SingleLinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(cb) {
        return cb ? cb(this.value) : `${this.value}`; 
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adding a new node to the end of a list
    append(value) {
        if(!value) {
            return this;
        }

        const newNode = new SingleLinkedListNode(value)

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    // Adding a new node to the beginning of a list
    prepend(value) {
        if(!value) {
            return this;
        }

        const newNode = new SingleLinkedListNode(value, this.head);

        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    // deleting a node from the beginning of a linked list
    delete(deletedValue) {
        if(!this.head || !deletedValue) {
            return null;
        }

        let deletedNode = null;

        while(this.head.value === deletedValue) {
            deletedNode = this.head;

            if(!this.head.next) {
                this.head = null;
                this.tail = null;

                return deletedNode;
            }
            this.head = this.head.next;
        }

        let currentNode = this.head;

        while(currentNode.next) {
            if(currentNode.next.value === deletedValue) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if(this.tail && this.tail.value === deletedValue) {
            deletedNode = this.tail;
            this.tail = currentNode;
        }

        return deletedNode;
    }

    // finds a first node in the list and returns it
    find(targetValue) {
        if(!targetValue) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if(currentNode.value === targetValue) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while(currentNode) {
            nodes.push(currentNode);

            currentNode = currentNode.next;
        }

        return nodes;
    }

    fromArray(array) {
        array.forEach((item) => this.append(item));

        return this;
    }

    reverse() {
        if(!this.head) {
            return this; 
        }

        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }

    deleteHead() {
        const deletedHead = this.head;

        if(this.head) {
            this.head = this.head.next;
        }

        return deletedHead;
    }

    deleteTail() {
        let currentNode = this.head;
        const deletedTail = this.tail;

        while(currentNode) {
            if(currentNode.next.next === null) {
                currentNode.next = null;
            }

            currentNode = currentNode.next;
        }

        this.tail = currentNode;

        return deletedTail;
    }

    toString() {
        return this.toArray().map((node) => node.toString()).toString();
    }
}

module.exports = {SingleLinkedList};
