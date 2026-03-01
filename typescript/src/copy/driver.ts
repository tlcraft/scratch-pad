const objectAssignCopy = (itemToCopy: any) => {
    const copy = Object.assign({}, itemToCopy);
    console.log(`Object.assign copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const objectSpreadCopy = (itemToCopy: any) => {
    const copy = { ...itemToCopy };
    console.log(`Object spread copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const deepCopy = (itemToCopy: any) => {
    const copy = JSON.parse(JSON.stringify(itemToCopy));
    console.log(`Deep copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

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
    console.log("Shallow Copy after modifying the original:", copy);
    // copy is modifed by the change to the original object because it is a shallow copy, and the hobbies array is shared between the original and the copy.

    const deepCopiedObject = deepCopy(originalObject);

    // Modifying the original object to show the effect of deep copy
    originalObject.hobbies.push("painting");
    console.log("Modified Original Object:", originalObject);
    console.log("Shallow Copy after modifying the original:", copy);
    console.log("Deep Copy after modifying the original:", deepCopiedObject);
    // deepCopiedObject is not modified by the change to the original object because it is a deep copy, and the hobbies array is not shared between the original and the deep copy.

    const objectAssignCopiedObject = objectAssignCopy(originalObject);

    // Modifying the original object to show the effect of Object.assign copy
    originalObject.hobbies.push("gardening");
    console.log("Modified Original Object:", originalObject);
    console.log("Object.assign Copy after modifying the original:", objectAssignCopiedObject);
    // objectAssignCopiedObject is not modified by the change to the original object because it is a shallow copy, and the hobbies array is shared between the original and the Object.assign copy.

    const objectSpreadCopiedObject = objectSpreadCopy(originalObject);

    // Modifying the original object to show the effect of Object spread copy
    originalObject.hobbies.push("swimming");
    originalObject.name = "Bob";
    console.log("Modified Original Object:", originalObject);
    console.log("Object spread Copy after modifying the original:", objectSpreadCopiedObject);
    // objectSpreadCopiedObject is not modified by the change to the original object because it is a shallow copy, and the hobbies array is shared between the original and the Object spread copy.
}
