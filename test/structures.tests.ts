import { expect } from "chai";
import { DataStructureFactory, DataStructures } from "../lib/DataStructureFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("empty queue", () => {
            const queue = DataStructureFactory.create<number>(DataStructures.Queue);
            const result = queue.size();
            expect(result).to.equal(0);
        })

        it("queue isn't empty", () => {
            const queue = DataStructureFactory.create<number>(DataStructures.Queue);
            queue.enqueue(1);
            const result = queue.isEmpty();
            expect(result).to.be.false;
        })

        it("poll element out of empty array", () => {
            const queue = DataStructureFactory.create<number>(DataStructures.Queue);
            const result = queue.poll();
            expect(result).to.equal(undefined);
        })

        it("peek into queue", () => {
            const queue = DataStructureFactory.create<number>(DataStructures.Queue);
            queue.enqueue(1);
            queue.enqueue(2);
            const result = queue.peek();
            expect(result).to.equal(1);
        })

        it("poll first element of queue", () => {
            const queue = DataStructureFactory.create<number>(DataStructures.Queue);
            queue.enqueue(1);
            queue.enqueue(2);
            const result = queue.poll();
            expect(result).to.equal(1);
        })

        it("poll first element of queue, with type string", () => {
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            queue.enqueue("a");
            queue.enqueue("b");
            const result = queue.poll();
            expect(result).to.equal("a");
        })
    })
    describe("Stack", () => {

        it("empty stack", () => {
            const stack = DataStructureFactory.create<number>(DataStructures.Stack);
            const result = stack.size();
            expect(result).to.equal(0);
        })

        it("stack isn't empty", () => {
            const stack = DataStructureFactory.create<number>(DataStructures.Stack);
            stack.enqueue(1);
            const result = stack.isEmpty();
            expect(result).to.be.false;
        })

        it("poll element out of empty array", () => {
            const stack = DataStructureFactory.create<number>(DataStructures.Stack);
            const result = stack.poll();
            expect(result).to.equal(undefined);
        })

        it("peek into stack", () => {
            const stack = DataStructureFactory.create<number>(DataStructures.Stack);
            stack.enqueue(1);
            stack.enqueue(2);
            const result = stack.peek();
            expect(result).to.equal(2);
        })

        it("poll last element of stack", () => {
            const stack = DataStructureFactory.create<number>(DataStructures.Stack);
            stack.enqueue(1);
            stack.enqueue(2);
            const result = stack.poll();
            expect(result).to.equal(2);
        })
    })
})