const { Stack } = require("./stack");

describe("Stack", () => {
    test("should create empty Stack", () => {
        const stack = new Stack(5);

        expect(stack.array).toEqual([]);
        expect(stack.top).toEqual(-1);
        expect(stack.maxSize).toEqual(5);
    });

    test("should placing an element on top of the stack", () => {
        const stack = new Stack(5);
        stack.push(2).push(3);

        expect(stack).toEqual({"array": [2,3], "maxSize": 5, "top": 1});
    });

    test("should removing an item from the stack", () => {
        const stack = new Stack();
        let item = stack.pop();

        expect(item).toBeNull();

        stack.push(1).push(2).push(3);

        expect(stack).toEqual({"array": [1,2,3], "maxSize": undefined, "top": 2});
    });
});