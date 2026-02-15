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

    const num1 = 24;
    const num2 = 48;
    
    const valuations1 = twoAdicValuation(num1);
    const valuations2 = twoAdicValuation(num2);

    console.log(`Valuations for ${num1}:`, valuations1);
    console.log(`Valuations for ${num2}:`, valuations2);

    const duplicates = valuations1.filter(valuation => valuations2.includes(valuation));
    console.log(`Number of duplicates: ${duplicates.length}`);
}
