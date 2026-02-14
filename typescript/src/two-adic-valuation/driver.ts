/*
    Given two numbers, divide each by 2 repeatedly until you hit an odd number (the 2-adic valuation).
    Add each valuation to a list and then compare the lists for duplicates.
    Return the number of duplicates between the lists.
*/

const twoAdicValuation = (num: number): number[] => {
    const valuations: number[] = [];
    let current = num;

    while (current % 2 === 0) {
        valuations.push(current);
        current /= 2;
    }

    return valuations;
}

if (require.main === module) {
    console.log("Two-adic valuation driver not yet implemented.");
}
