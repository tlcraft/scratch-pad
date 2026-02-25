const shallowCopy = (itemToCopy: any) => {
    const copy = { ...itemToCopy };
    console.log(`Shallow copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

if (require.main === module) {
    console.log("Running shallow and deep copy examples...");

    const originalObject = { name: "Alice", age: 30, hobbies: ["reading", "hiking"] };
    console.log("Original Object:", originalObject);

    const copy = shallowCopy(originalObject);

    // Modifying the original object to show the effect of shallow copy
    originalObject.hobbies.push("cooking");
    console.log("Modified Original Object:", originalObject);
    console.log("Shallow Copy after modifying original:", copy);
}
