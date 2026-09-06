/*
                Knapsack Problem - Dynamic Programming Implementation in TypeScript

                Given a set of items, with a weight and a value, determine the maximum value
                that can be obtained by selecting items such that their total weight does not
                exceed a given limit.

                Items can be only selected once (0/1 Knapsack Problem).

                Explanation of `bestValueByCapacity` (the 1-D DP array used here):
                - Length: the array has `capacity + 1` entries so indices map directly to
                    capacities 0..capacity. Index `w` represents a subproblem with capacity `w`.
                - Meaning: `bestValueByCapacity[w]` stores the maximum total value achievable
                    with exactly capacity `w` available (i.e., using items whose total weight
                    does not exceed `w`). The final result is `bestValueByCapacity[capacity]`.
                - Update rule (0/1 knapsack): for each item, loop `w` from `capacity` down to
                    `item.weight` and do
                                bestValueByCapacity[w] = max(
                                        bestValueByCapacity[w],
                                        bestValueByCapacity[w - item.weight] + item.value
                                )
                    Iterating `w` downward ensures that when computing states for the current
                    item we read `bestValueByCapacity[w - item.weight]` from the previous
                    item-state, preventing reuse of the same item more than once. Iterating
                    upward would allow the same item to be counted multiple times (unbounded).
                - Complexity: time O(n * capacity), space O(capacity) for `n` items.
*/

interface Item { 
    weight: number,
    value: number 
}

const processKnapsack = (items: Item[], capacity: number): number => {
    const bestValueByCapacity = new Array(capacity + 1).fill(0);

    items.forEach(item => {
        for (let remainingCapacity = capacity; remainingCapacity >= item.weight; remainingCapacity--) {
            const valueWithCurrentItem = item.value + bestValueByCapacity[remainingCapacity - item.weight];
            const maxValueWithoutCurrentItem = bestValueByCapacity[remainingCapacity];
            bestValueByCapacity[remainingCapacity] = Math.max(valueWithCurrentItem, maxValueWithoutCurrentItem);
        }
    });

    return bestValueByCapacity[capacity];
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
