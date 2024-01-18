class Stack{
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.top = -1;
        this.array = new Array(maxSize);
    }

    push(element) {
        this.array[++this.top] = element;

        return this;
    }

    pop() {
        if(this.top - 1 < 0) {
            return null;
        }
        return this.array[--this.top];
    }

    peek() {
        return this.array[this.top];
    }

    isEmpty() {
        return (this.top === -1);
    }

    isFull() {
        return (top === this.maxSize);
    }
}

module.exports = {Stack};
