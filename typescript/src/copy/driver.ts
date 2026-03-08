const objectAssignCopy = (itemToCopy: any) => {
    const copy = Object.assign({}, itemToCopy);
    console.log(`\n\nObject.assign copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const objectSpreadCopy = (itemToCopy: any) => {
    const copy = { ...itemToCopy };
    console.log(`\n\nObject spread copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const jsonStringifyCopy = (itemToCopy: any) => {
    const copy = JSON.parse(JSON.stringify(itemToCopy));
    console.log(`\n\nJSON stringify copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const structuredCloneCopy = (itemToCopy: any) => {
    const copy = structuredClone(itemToCopy);
    console.log(`\n\nStructured clone copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

if (require.main === module) {
    console.log("Running shallow and deep copy examples...");

    const originalObject = { name: "Alice", age: 30, hobbies: ["reading", "hiking"] };
    console.log("Original Object:", originalObject);

    const spreadCopiedObject = objectSpreadCopy(originalObject);

    // Modifying the original object to show the effect of shallow copy
    originalObject.hobbies.push("cooking");
    originalObject.name = "Bob";
    console.log("Modified Original Object:", originalObject);
    console.log("Spread Copy after modifying the original:", spreadCopiedObject);
    // spreadCopiedObject is not modifed by the change to the original object because it is a shallow copy, and the hobbies array is updated because it is shared between the original and the copy.

    const jsonStringifiedCopiedObject = jsonStringifyCopy(originalObject);

    // Modifying the original object to show the effect of deep copy
    originalObject.hobbies.push("painting");
    console.log("Modified Original Object:", originalObject);
    console.log("Spread Copy after modifying the original:", spreadCopiedObject);
    console.log("JSON Stringify Copy after modifying the original:", jsonStringifiedCopiedObject);
    // jsonStringifiedCopiedObject is not modified by the change to the original object because it is a deep copy, and the hobbies array is not shared between the original and the deep copy.

    const objectAssignCopiedObject = objectAssignCopy(originalObject);

    // Modifying the original object to show the effect of Object.assign copy
    originalObject.hobbies.push("gardening");
    originalObject.name = "John";
    console.log("Modified Original Object:", originalObject);
    console.log("Object.assign Copy after modifying the original:", objectAssignCopiedObject);
    // objectAssignCopiedObject is not modified by the change to the original object because it is a shallow copy, and the hobbies array is updated because it is shared between the original and the Object.assign copy.

    const structuredCloneCopiedObject = structuredCloneCopy(originalObject);
    
    // Modifying the original object to show the effect of structured clone copy
    originalObject.hobbies.push("dancing");
    originalObject.name = "Charlie";
    console.log("Modified Original Object:", originalObject);
    console.log("Structured clone Copy after modifying the original:", structuredCloneCopiedObject);
    // structuredCloneCopiedObject is not modified by the change to the original object because it is a deep copy, and the hobbies array is not shared between the original and the structured clone copy.
}
