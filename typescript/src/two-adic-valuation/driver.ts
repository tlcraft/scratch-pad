/*
    Given two numbers, divide each by 2 repeatedly until you hit an odd number (the 2-adic valuation).
    Add each valuation to a list and then compare the lists for duplicates.
    Return the number of duplicates between the lists.
*/

const twoAdicValuation = (num: number): number[] => {
    const valuations: number[] = [num];
    let current = num;

    while (current % 2 === 0) {
        current /= 2;
        valuations.push(current);
    }

    return valuations;
}

const countDuplicates = (list1: number[], list2: number[]): number => {
    const duplicates = list1.filter(valuation => list2.includes(valuation));
    console.log(`Number of duplicates: ${duplicates.length}`);
    return duplicates.length;
}

const processNumbers = (num1: number, num2: number): void => {
    const valuations1 = twoAdicValuation(num1);
    const valuations2 = twoAdicValuation(num2);

    console.log(`Valuations for ${num1}:`, valuations1);
    console.log(`Valuations for ${num2}:`, valuations2);

    const duplicates = countDuplicates(valuations1, valuations2);
    console.log(`Total duplicates between ${num1} and ${num2}:`, duplicates);
}

if (require.main === module) {
    console.log("Two-adic valuation driver not yet implemented.");

    processNumbers(24, 48);
    processNumbers(18, 36);
    processNumbers(8, 4);
}
