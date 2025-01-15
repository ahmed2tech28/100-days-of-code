function smallestSubarrayWithSum(arr, target) {
    let n = arr.length;
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        // Add the current element to the sum
        currentSum += arr[end];

        // Shrink the window as small as possible while the sum is greater than the target
        while (currentSum > target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example Usage
let array = [2, 3, 1, 2, 4, 3];
let targetSum = 7;
console.log(smallestSubarrayWithSum(array, targetSum)); // Output: 2
