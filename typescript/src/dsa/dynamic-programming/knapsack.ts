/*
    Knapsack Problem - Dynamic Programming Implementation in TypeScript

    Given a set of items, with a weight and a value, determine the maximum value that can be obtained by selecting items such that their total weight does not exceed a given limit.
*/

interface Item { 
    weight: number,
    value: number 
}

const processKnapsack = (items: Item[], capacity: number): number => {
    return 0;
}

if (require.main === module) {
    console.log('Testing the dynamic programming knapsack implementation');

    const items = [
        { weight: 2, value: 3 },
        { weight: 3, value: 4 },
        { weight: 4, value: 5 },
        { weight: 5, value: 6 }
    ];

    const capacity = 5;

    const maximum = processKnapsack(items, capacity);
    console.log(`Maximum value that can be obtained: ${maximum}`);
}
