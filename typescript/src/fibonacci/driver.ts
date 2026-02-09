const fibonacci = (n: number): number[] => {
    return [1];
}

if (require.main === module) {
    console.log('Printing the fibonacci sequence');
    const sequence = fibonacci(5);
    console.log('Output: ', sequence);
}
