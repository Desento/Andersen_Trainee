class Stack {
    constructor(size = 10) {
        if (!this.isValidSize(size)) {
            throw new Error('Invalid max size');
        }

        this.size = size;
        this.elements = [];
    }

    isValidSize(size) {
        return typeof size === 'number' && Number.isInteger(size) && size >= 1;
    }

    isFull() {
        return this.elements.length >= this.size;
    }

    push(elem) {
        if (this.isFull()) {
            throw new Error('Stack overflow');
        }

        this.elements[this.elements.length] = elem;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        const lastElement = this.elements[this.elements.length - 1];

        this.elements.length = this.elements.length - 1;
        return lastElement;
    }

    peek() {
        return this.isEmpty() ? null : this.elements[this.elements.length - 1];
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    toArray() {
        return [...this.elements];
    }

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error('Not an iterable');
        }

        const stack = new Stack(iterable.length);

        for (const elem of iterable) {
            stack.push(elem);
        }

        return stack;
    }
}
