import { IDataStructure } from "./IDataStructure";

export class Queue<T> implements IDataStructure<T> {
    values: Array<T> = new Array<T>();

    public size(): number {
        return this.values.length;
    }
    public enqueue(value: T): void {
        this.values.push(value);
    }
    public peek(): T {
        return this.values[0];
    }
    public poll(): T {
        return this.values.shift();
    }
    public isEmpty(): boolean {
        return this.values.length === 0;
    }
}