const { SingleLinkedList } = require ("./singly-linked-list");

describe("SingleLinkedList", () => {
    test("should create empty linked list", () => {
        const linkedList = new SingleLinkedList();
        
        expect(linkedList.toString()).toBe("");
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    test("should append a node to the list", () => {
        const linkedList = new SingleLinkedList();

        linkedList.append(1).append(3).append(5);

        expect(linkedList.toString()).toBe("1,3,5");
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(5);

        linkedList.append();

        expect(linkedList.toString()).toBe("1,3,5");
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(5);
    });

    test("should prepend node to the list", () => {
        const linkedList = new SingleLinkedList();

        linkedList.prepend();

        expect(linkedList.toString()).toBe("");

        linkedList.prepend(2);

        expect(linkedList.head.toString()).toBe("2");
        expect(linkedList.head).toEqual({next: null, value: 2});
        expect(linkedList.tail).toEqual({next: null, value: 2});

        linkedList.prepend(3).prepend(4);

        expect(linkedList.toString()).toBe("4,3,2");
    });

    test("should delete node by value from list", () => {
        const linkedList = new SingleLinkedList();

        expect(linkedList.delete(5)).toBeNull();

        let deletedNode = linkedList.append(1).delete(1);
        expect(deletedNode.value).toBe(1);
        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append(1).append(2).append(3).append(4).append(5).append(6);

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(6);
        expect(linkedList.toString()).toBe("1,2,3,4,5,6");

        linkedList.delete(1);
        deletedNode = linkedList.delete(2);
        
        expect(deletedNode.value).toBe(2);
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.toString()).toBe("3,4,5,6");

        linkedList.delete(4);
        deletedNode = linkedList.delete(5);

        expect(deletedNode.value).toBe(5);
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.tail.value).toBe(6);
        expect(linkedList.toString()).toBe("3,6");

        deletedNode = linkedList.delete(6);

        expect(deletedNode.value).toBe(6);
        expect(linkedList.toString()).toBe("3");
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.tail.value).toBe(3);
    });

    test("should find a first node in the list and return it", () => {
        const linkedList = new SingleLinkedList();

        let foundNode = linkedList.find(2);

        expect(foundNode).toBeNull();

        linkedList.append(1).append(2).append(3).append(4);
        foundNode = linkedList.find(2);

        expect(foundNode.value).toBe(2);

        foundNode = linkedList.find(5);

        expect(foundNode).toBeNull();

        foundNode = linkedList.find();

        expect(foundNode).toBeNull();
    });

    test("should convert a list to an array", () => {
        const linkedList = new SingleLinkedList();

        let array = linkedList.toArray();

        expect(array).toEqual([]);

        linkedList.append(1).append(2).append(3);
        array = linkedList.toArray();

        expect(array.length).toBe(3);
        expect(array[0].value).toBe(1);
        expect(array[2].value).toBe(3);
    });

    test("should convert array to linked list", () => {
        const linkedList = new SingleLinkedList();

        linkedList.fromArray([]);

        expect(linkedList).toEqual({head: null, tail: null});

        const array = [1, 2, 3, 4];
        linkedList.fromArray(array);
    
        expect(linkedList.toString()).toBe("1,2,3,4");
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(4);

        linkedList.fromArray([]);

        expect(linkedList.toString()).toBe("1,2,3,4");
    });

    test("should reverse the linkedList", () => {
        const linkedList = new SingleLinkedList();

        linkedList.reverse();

        expect(linkedList).toEqual({head: null, tail: null});

        linkedList.append(1);
        linkedList.reverse();

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(1);

        linkedList.append(2).append(3).append(4);
        linkedList.reverse();

        expect(linkedList.toString()).toBe("4,3,2,1");
        expect(linkedList.head.value).toBe(4);
        expect(linkedList.tail.value).toBe(1);
    });

    test("should deleted tail from linkedList", () => {
        const linkedList = new SingleLinkedList();

        let tail = linkedList.deleteTail();

        expect(tail).toBeNull();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.append(1).append(2).append(3).append(4);
        tail = linkedList.deleteTail();

        expect(tail).toEqual({value: 4, next: null});
        expect(linkedList.toString()).toBe("1,2,3");
    });

    test("should deleted head from linkedList", () => {
        const linkedList = new SingleLinkedList();

        let deletedHead = linkedList.deleteHead();

        expect(deletedHead).toBeNull();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.append(1).append(2).append(3).append(4);
        deletedHead = linkedList.deleteHead();
        
        expect(deletedHead.value).toBe(1);
        expect(linkedList.head.value).toBe(2);
        expect(linkedList.toString()).toBe("2,3,4");
    });
});
