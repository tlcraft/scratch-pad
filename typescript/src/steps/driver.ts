/*
    Given two number arrays of equal lengths with numbers of equal digit lengths,
    calculate the number of changes to make to each number to make them equal.

    nums1 = [123, 456]
    nums2 = [321, 759]

    Difference between 1 and 3 = 2
    Difference between 2 and 2 = 0
    Difference between 3 and 1 = 2

    Difference between 4 and 7 = 3
    Difference between 5 and 5 = 0
    Difference between 6 and 9 = 3

    Total = 2 + 0 + 2 + 3 + 0 + 3 = 10
 */

const countStepsBetweenNumbers = (nums1: number[], nums2: number[]): number => {
    if (nums1.length !== nums2.length) {
        throw new Error("Arrays must be of equal length.");
    }

    const joined1 = nums1.join('');
    const joined2 = nums2.join('');

    if (joined1.length !== joined2.length) {
        throw new Error("Numbers must have equal digit lengths.");
    }

    let count = 0;
    
    for (let i = 0; i < joined1.length; i++) {
        const digit1 = parseInt(joined1.charAt(i), 10);
        const digit2 = parseInt(joined2.charAt(i), 10);
        
        count += Math.abs(digit1 - digit2);
    }

    return count;
}

if (require.main === module) {
    console.log("Count steps between numbers.");

    const nums1 = [123, 456];
    const nums2 = [321, 759];

    const totalSteps = countStepsBetweenNumbers(nums1, nums2);

    console.log(`Total steps needed: ${totalSteps}`);


    const nums3 = [1234, 1234];
    const nums4 = [4321, 4325];

    const totalSteps2 = countStepsBetweenNumbers(nums3, nums4);

    console.log(`Total steps needed for the second set: ${totalSteps2}`);
}
