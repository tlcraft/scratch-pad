class DynamicArray<T> {
    private array: T[];
    private count: number = 0;

    constructor(private capacity: number) {
        this.array = new Array<T>(capacity);
    }

    public get(index: number): T | undefined {
        if (index < 0 || index >= this.count) {
            throw new Error("Index out of bounds");
        }
        return this.array[index];
    }

    public set(index: number, value: T): void {
        if (index < 0 || index >= this.count) {
            throw new Error("Index out of bounds");
        }
        this.array[index] = value;
    }

    public push(value: T): void {
        if (this.capacity <= this.count) {
            this.resize();
        }
        
        this.array[this.count] = value;
        this.count++;
    }

    private resize(): void {
        this.capacity *= 2;
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
        if (value !== undefined) {
            console.log(`Index ${i}: ${value}`);
        }
    }
}
