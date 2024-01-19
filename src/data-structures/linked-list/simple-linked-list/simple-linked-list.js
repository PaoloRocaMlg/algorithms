/**
 * Односвязный список.
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  toArray() {
    const nodes = [];
    let current = this;

    while (current) {
      nodes.push(current.getValue());
      current = current.getNext();
    }
    return nodes;
  }

  reverse() {
    let reversedList = null;
    let current = this;

    while (current) {
      reversedList = new Node(current.getValue(), reversedList);
      current = current.getNext();
    }

    return reversedList;
  }

  toString() {
    return this.toArray().map((value) => console.log(value));
  }
}

const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
node.reverse().toString();

module.exports = Node;
