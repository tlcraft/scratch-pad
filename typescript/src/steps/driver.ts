const countStepsBetweenNumbers = (nums1: number[], nums2: number[]): number => {
    let count = 0;

    if (nums1.length !== nums2.length) {
        throw new Error("Arrays must be of equal length.");
    }

    const joined1 = nums1.join('');
    const joined2 = nums2.join('');

    if (joined1.length !== joined2.length) {
        throw new Error("Numbers must have equal digit lengths.");
    }

    for (let i = 0; i < joined1.length; i++) {
        const digit1 = parseInt(joined1.charAt(i), 10);
        const digit2 = parseInt(joined2.charAt(i), 10);
        count += Math.abs(digit1 - digit2);
    }

    return count;
}

if (require.main === module) {
    console.log("Count steps between numbers.");

    const arr1 = [123, 456];
    const arr2 = [321, 759];

    const result = countStepsBetweenNumbers(arr1, arr2);

    console.log(`Total steps needed: ${result}`);
}
