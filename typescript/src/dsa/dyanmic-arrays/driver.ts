/*
    Dynamic Array Implementation in TypeScript

    This implementation provides a dynamic array that can grow in size as needed. 
    It supports basic operations such as getting and setting elements, adding new elements, and removing the last element.

    The dynamic array starts with an initial capacity and doubles its capacity when it runs out of space. 
    This allows for efficient memory usage while providing the flexibility to handle varying amounts of data.

    The time complexity for adding an element is O(1) on average, but can be O(n) when resizing is needed.
    The time complexity for getting and setting elements is O(1).
    The time complexity for popping an element is O(1).

    The space complexity is O(n) where n is the number of elements in the dynamic array.
*/
class DynamicArray<T> {
    private array: T[];
    private count: number = 0;

    constructor(private capacity: number) {
        if (!Number.isInteger(capacity) || capacity < 0 || Number.MAX_SAFE_INTEGER < capacity) {
            throw new Error("Capacity must be a non-negative integer.");
        }
        this.array = new Array<T>(capacity);
    }

    public get(index: number): T | undefined {
        if (0 <= index && index < this.count) {
            return this.array[index];
        }
        throw new Error("Index out of bounds");
    }

    public set(index: number, value: T): void {
        if (0 <= index && index < this.count) {
            this.array[index] = value;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    public push(value: T): void {
        if (this.capacity <= this.count) {
            this.resize();
        }
        
        this.array[this.count] = value;
        this.count++;
    }

    public pop(): T | undefined {
        if (this.count === 0) {
            return undefined;
        }
        
        const value = this.array[this.count - 1];
        this.count--;
        this.array[this.count] = undefined as T;
        return value;
    }

    private resize(): void {
        if (this.capacity === 0) {
            this.capacity = 1;
        } else {
            this.capacity *= 2;
        }

        const newArray: T[] = new Array<T>(this.capacity);

        for (let i = 0; i < this.count; i++) {
            newArray[i] = this.array[i]!;
        }

        this.array = newArray;
    }

    public size(): number {
        return this.count;
    }
}


if (require.main === module) {
    console.log('Testing the dynamic array implementation');

    const dynamicArray = new DynamicArray<number>(2);
    dynamicArray.push(1);
    dynamicArray.push(2);
    console.log('Size after adding 2 elements: ', dynamicArray.size());

    dynamicArray.push(3);
    console.log('Size after adding 3rd element (should resize): ', dynamicArray.size());

    console.log('Elements in the dynamic array:');
    for (let i = 0; i < dynamicArray.size(); i++) {
        const value = dynamicArray.get(i);
        console.log(`Index ${i}: ${value}`);
    }
    
    const dynamicArray2 = new DynamicArray<string>(0);
    dynamicArray2.push("Hello");
    dynamicArray2.push("World");
    console.log('Size of string dynamic array: ', dynamicArray2.size());

    console.log('Elements in the string dynamic array:');
    for (let i = 0; i < dynamicArray2.size(); i++) {
        const value = dynamicArray2.get(i);
        console.log(`Index ${i}: ${value}`);
    }

    const item = dynamicArray2.pop();
    console.log('Popped item: ', item);
    console.log('Size after popping an element: ', dynamicArray2.size());
}
