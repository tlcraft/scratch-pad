const assignmentCopy = (itemToCopy: any) => {
    const copy = itemToCopy;
    console.log(`\n\nAssignment copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const objectAssignCopy = (itemToCopy: any) => {
    const copy = Object.assign({}, itemToCopy);
    console.log(`\n\nObject.assign copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const objectFreezeCopy = (itemToCopy: any) => {
    const copy = Object.freeze(itemToCopy);
    console.log(`\n\nObject.freeze copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
    return copy;
};

const objectSealCopy = (itemToCopy: any) => {
    const copy = Object.seal(itemToCopy);
    console.log(`\n\nObject.seal copy of ${JSON.stringify(itemToCopy)} is ${JSON.stringify(copy)}`);
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

    const assignmentCopiedObject = assignmentCopy(originalObject);

    // Modifying the original object to show the effect of assignment copy
    originalObject.hobbies.push("swimming");
    originalObject.name = "David";
    console.log("Modified Original Object:", originalObject);
    console.log("Assignment Copy after modifying the original:", assignmentCopiedObject);
    // assignmentCopiedObject is modified by the change to the original object because it is a reference copy, and the hobbies array is updated because it is shared between the original and the assignment copy.

    const objectFreezeCopiedObject = objectFreezeCopy(originalObject);

    // Modifying the original object to show the effect of Object.freeze copy
    originalObject.hobbies.push("running");
    console.log("Modified Original Object:", originalObject);
    console.log("Object.freeze Copy after modifying the original:", objectFreezeCopiedObject);
    // Freezing an object is the highest integrity level that JavaScript provides. Properties can't be modified however arrays can still be modified because freezing an object only prevents changes to the object's properties, but it does not prevent changes to the contents of the properties if they are objects or arrays. Therefore, the hobbies array in the original object can still be modified, and the changes will be reflected in the frozen copy because it is a reference copy.
}

// For more information on copying objects in JavaScript and TypeScript, you can refer to the following resources:
// Copy — Best practices — JavaScript and TypeScript: https://medium.com/copy-best-practices-javascript-and-typescript/copy-best-practices-javascript-and-typescript-4ff8b9905af4
    // structuredClone is a new method for deep copying objects in JavaScript, and it is more efficient than using JSON.stringify and JSON.parse for deep copying. It can handle more complex data types, such as functions, symbols, and circular references, which JSON.stringify cannot handle. However, it is not supported in all environments yet, so you may need to check for compatibility before using it in production code.
// MDN Web Docs on Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// MDN Web Docs on Spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// MDN Web Docs on JSON.stringify and JSON.parse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// MDN Web Docs on structuredClone: https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
