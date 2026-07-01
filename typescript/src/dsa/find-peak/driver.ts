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

// AI generated linear search implementation for finding peak in an array. This is not the most efficient way to find a peak, but it works for demonstration purposes.
const findPeakLinear = (arr: number[]): number => {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i]! > arr[i - 1]! && arr[i]! > arr[i + 1]!) {
            return i;
        }
    }
    return -1; // No peak found
}

const runFindPeakAnalysis = (values: number[]): void => {
    const startTime = performance.now();
    const peakIndex = findPeak(values);
    const endTime = performance.now();
    console.log(`Binary search: Peak found at index ${peakIndex} with value ${values[peakIndex]} in ${endTime - startTime} milliseconds`);
    
    const startTimeLinear = performance.now();
    const peakIndexLinear = findPeakLinear(values);
    const endTimeLinear = performance.now();
    console.log(`Linear search: peak found at index ${peakIndexLinear} with value ${values[peakIndexLinear]} in ${endTimeLinear - startTimeLinear} milliseconds`);
}

if (require.main === module) {
    console.log('Locating the peak of an array (which contains no duplicates) using binary search and linear search:');

    const values = [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];
    runFindPeakAnalysis(values);

    const values2 = [1, 3, 5, 6, 7, 4, 2, 1];
    runFindPeakAnalysis(values2);

    const values3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 7, 6, 5, 4, 2, 1];
    runFindPeakAnalysis(values3);

    const values4 = [0, 1, 0];
    runFindPeakAnalysis(values4);
}
