const fibonacci = (n: number): number[] => {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const seq: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1]! + seq[i - 2]!);
    }

    return seq;
}

if (require.main === module) {
    console.log('Printing the fibonacci sequence');

    const sequence = fibonacci(5);
    console.log('Output: ', sequence);

    const anotherSequence = fibonacci(20);
    console.log('Another Output: ', anotherSequence);
}
