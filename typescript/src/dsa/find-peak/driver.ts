// Find the peak of graph given array of points with a single peak. Uses binary search.
const findPeak = (arr: number[]): number => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid]! < arr[mid + 1]!) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

if (require.main === module) {
    console.log('Locating the peak of an array');

    const values = [1, 3, 5, 7, 6, 4, 2];
    const peakIndex = findPeak(values);
    console.log(`Peak found at index ${peakIndex} with value ${values[peakIndex]}`);
}
