const findPeak = (arr: number[]): number => {
    
    return 0;
}

if (require.main === module) {
    console.log('Locating the peak of an array');

    const values = [1, 3, 5, 7, 6, 4, 2];

    const peakIndex = findPeak(values);
    console.log(`Peak found at index ${peakIndex} with value ${values[peakIndex]}`);
}
