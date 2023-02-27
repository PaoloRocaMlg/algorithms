class DoubleLinkedListNode {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        if(!value) {
            return this;
        }

        const newNode = new DoubleLinkedListNode(value, this.tail);

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        if(!value) {
            return this;
        }

        const newNode = new DoubleLinkedListNode(value, null, this.head);

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.head.prev = newNode;
        this.head = newNode;

        return this;
    }

    delete(deletedValue) {
        if(!deletedValue || !this.head) {
            return null;
        }

        let deletedNode = null;

        while(this.head && this.head.value === deletedValue) {
            deletedNode = this.head;

            if(!deletedNode.next) {
                this.head = null;
                this.tail = null;

                return deletedNode;
            }

            this.head = this.head.next;
            this.head.prev = null;
        }

        let currentNode = this.head.next;

        while(currentNode.next) {
            if(currentNode.value === deletedValue) {
                deletedNode = currentNode;

                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            } 
            currentNode = currentNode.next;
        }

        if(this.tail.value === deletedValue) {
            deletedNode = this.tail;
            this.tail = currentNode.prev;
            currentNode.prev.next = null;
        }

        return deletedNode;
    }

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
        let nodes = [];
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
        if(!this.head || !this.tail) {
            return this;
        }

        let currentNode = this.head;

        while(currentNode) {
            [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev];

            currentNode = currentNode.prev;
        }

        [this.tail, this.head] = [this.head, this.tail];

        return this;
    }

    deleteHead() {
        if(!this.head || !this.tail) {
            return null;
        }

        let deletedHead = this.head;

        if(this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    deleteTail() {
        if(!this.head || !this.tail) {
            return null;
        }

        const deletedTail = this.tail;
        if(this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            this.tail = null;
            this.head = null;
        }

        return deletedTail;
    }

    toString() {
        return this.toArray().map((node) => node.toString()).toString();
    }
}

module.exports = {DoubleLinkedList}