class StackNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(size = 10) {
        if (!this.isValidSize(size)) {
            throw new Error('Invalid max size');
        }

        this.maxSize = size;
        this.count = 0;
        this.topNode = null;
    }

    isValidSize(size) {
        return typeof size === 'number' && Number.isInteger(size) && size >= 1;
    }

    isFull() {
        return this.count >= this.maxSize;
    }

    push(elem) {
        if (this.isFull()) {
            throw new Error('Stack overflow');
        }

        const newNode = new StackNode(elem, this.topNode);

        this.topNode = newNode;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        const removedNode = this.topNode;

        this.topNode = removedNode.next;
        this.count--;

        return removedNode.data;
    }

    peek() {
        return this.isEmpty() ? null : this.topNode.data;
    }

    isEmpty() {
        return this.count === 0;
    }

    toArray() {
        const result = [];
        let current = this.topNode;

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    }

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error('Not an iterable');
        }

        const iterator = iterable[Symbol.iterator]();
        const stack = new Stack(iterable.length);

        for (let i = 0; i < iterable.length; i++) {
            stack.push(iterator.next().value);
        }

        return stack;
    }
}
