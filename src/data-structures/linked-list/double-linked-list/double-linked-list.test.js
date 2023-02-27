const {DoubleLinkedList} = require("./double-linked-list");

describe("Double linked-list", () => {
    test("should create empty linked-list", () => {
        const linkedList = new DoubleLinkedList();

        expect(linkedList.toString()).toBe("");
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    test("should append a new node to the double linked-list", () => {
        const linkedList = new DoubleLinkedList();

        linkedList.append();

        expect(linkedList.toString()).toBe("");

        linkedList.append(1).append(2).append(3);

        expect(linkedList.toString()).toBe("1,2,3");
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(3);
    });

    test("should prepend a new node to the double linked-list", () => {
        const linkedList = new DoubleLinkedList();

        linkedList.prepend();

        expect(linkedList.toString()).toBe("");

        linkedList.prepend(1).prepend(2).prepend(3);

        expect(linkedList.toString()).toBe("3,2,1");
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.tail.value).toBe(1);
    });

    test("should delete a node by value from list", () => {
        const linkedList = new DoubleLinkedList();

        expect(linkedList.delete(5)).toBeNull();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.append(1);
        let deletedNode = linkedList.delete(1);

        expect(deletedNode.value).toBe(1);
        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append

        linkedList.append(1).append(1).append(2).append(3).append(1);
        deletedNode = linkedList.delete(1);

        expect(deletedNode.value).toBe(1);
        expect(linkedList.toString()).toBe("2,3");
        expect(linkedList.head.value).toBe(2);
        expect(linkedList.tail.value).toBe(3);
        expect(linkedList.tail.next).toBeNull();
    });

    test("should find a first node in the list and return it", () => {
        const linkedList = new DoubleLinkedList();

        expect(linkedList.find(1)).toBeNull();

        linkedList.append(1).append(2).append(3);
        let foundNode = linkedList.find(3);

        expect(foundNode.value).toBe(3);
        expect(linkedList.find()).toBeNull();
        expect(linkedList.find(9)).toBeNull();
    });

    test("should convert a double linked-list to array", () => {
        const linkedList = new DoubleLinkedList();

        let array = linkedList.toArray();

        expect(array).toEqual([]);
        
        linkedList.append(1).append(2).append(3);
        array = linkedList.toArray();

        expect(linkedList.toString()).toEqual("1,2,3");
        expect(array.length).toBe(3);
    });

    test("should add nodes from array to the Dolby Linked-list", () => {
        const linkedList = new DoubleLinkedList();

        expect(linkedList.fromArray([])).toEqual({"head": null, "tail": null});

        linkedList.fromArray([1,2,3]);

        expect(linkedList.toString()).toBe("1,2,3");
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(3);
    });

    test("should reverse the dolby linkedList", () => {
        const linkedList = new DoubleLinkedList()

        expect(linkedList.reverse()).toEqual({head: null, tail: null});

        linkedList.append(1).reverse();
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.head.prev).toBeNull();
        expect(linkedList.head.next).toBeNull();
        expect(linkedList.tail.value).toBe(1);
        expect(linkedList.tail.prev).toBeNull();
        expect(linkedList.tail.next).toBeNull();

        linkedList.delete(1);
        linkedList.append(1).append(2).append(3).append(4);
        linkedList.reverse()

        expect(linkedList.toString()).toBe("4,3,2,1");
        expect(linkedList.head.value).toBe(4);
        expect(linkedList.head.prev).toBeNull();
        expect(linkedList.head.next.value).toBe(3);
        expect(linkedList.tail.value).toBe(1);
        expect(linkedList.tail.prev.value).toBe(2);
        expect(linkedList.tail.next).toBeNull();
    });

    test("should deleted head from linkedList", () => {
        const linkedList = new DoubleLinkedList();

        expect(linkedList.deleteHead()).toBeNull();
        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append(1);
        let deletedHead = linkedList.deleteHead();

        expect(deletedHead.value).toBe(1);
        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append(1).append(2).append(3);
        deletedHead = linkedList.deleteHead();

        expect(deletedHead.value).toBe(1);
        expect(linkedList.toString()).toBe("2,3");
        expect(linkedList.head.value).toBe(2);
        expect(linkedList.head.next.toString()).toBe("3");
        expect(linkedList.head.prev).toBeNull();
        expect(linkedList.tail.value).toBe(3);
        expect(linkedList.tail.prev.toString()).toBe("2");
    });

    test("should deleted tail from linkedList", () => {
        const linkedList = new DoubleLinkedList();

        expect(linkedList.deleteTail()).toBeNull();
        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append(1);
        let deletedTail = linkedList.deleteTail();

        expect(deletedTail.value).toBe(1);
        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append(1).append(2).append(3);
        deletedTail = linkedList.deleteTail();

        expect(deletedTail.value).toBe(3);
        expect(linkedList.toString()).toBe("1,2");
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(2);
        expect(linkedList.tail.next).toBeNull();
    });
});