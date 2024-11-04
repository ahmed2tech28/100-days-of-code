function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  // Sort the intervals by the starting point
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastMerged = merged[merged.length - 1];
    const current = intervals[i];

    // If the current interval overlaps with the last merged interval, merge them
    if (lastMerged[1] >= current[0]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Otherwise, add the current interval as a new entry in merged
      merged.push(current);
    }
  }

  return merged;
}

// Example usage
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]
