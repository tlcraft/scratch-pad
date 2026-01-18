class MyClass {
    #x: number = 0;
    private y: number = 0;

    addToX(value: number): void {
        this.#x += value;
    }

    getX(): number {
        return this.#x;
    }
}

const myInstance = new MyClass();
myInstance.addToX(5);
console.log("Value of x after adding 5: ", myInstance.getX());

myInstance.addToX(10);
console.log("Value of x after adding 10: ", myInstance.getX());

const keys = Object.keys(myInstance);
console.log("Keys of myInstance: ", keys);
if (JSON.stringify(keys) === JSON.stringify(['y'])) {
    console.log("Private variable 'x' is not exposed in Object.keys() output.");
} else {
    console.log("Private variable 'x' is incorrectly exposed in Object.keys() output.");
}

// The following line will cause an error because 'x' is private and cannot be accessed directly
// console.log("Direct access to x: ", myInstance.x);

// The following line will also cause an error because 'x' is private and cannot be accessed directly
// myInstance.x = 20;

// Instead, we can use the public methods to interact with the private variable 'x'
myInstance.addToX(15);
console.log("Value of x after adding 15: ", myInstance.getX());

// We can also create another instance of MyClass to demonstrate that each instance has its own private variable 'x'
const anotherInstance = new MyClass();
console.log("Value of x in another instance: ", anotherInstance.getX()); // Should be 0

anotherInstance.addToX(7);
console.log("Value of x in another instance after adding 7: ", anotherInstance.getX()); // Should be 7

// The original instance's 'x' should remain unchanged
console.log("Value of x in original instance: ", myInstance.getX()); // Should still be 30
