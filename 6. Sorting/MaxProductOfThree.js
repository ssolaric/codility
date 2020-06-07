// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // A = [-3, 1, 2, -2, 5, 6]
  // [-3, -2, 1, 2, 5, 6]

  // [-10, -6, -5, -3, -2]
  // [2, 4, 6, 7, 8, 9]
  // [-10, -6, -5, -3, -2, 0, 4]
  // [-1000, -2, 3, 6, 7, 9]
  // [-1000, 3, 6, 7, 9]
  // [-10, 0, 0, 5]

  // [-1000, -1000, -1000, 1000, 1000, 1000]
  let n = A.length;
  A.sort((a, b) => a - b);
  return Math.max(
    A[0] * A[1] * A[n - 1],
    A[0] * A[n - 2] * A[n - 1],
    A[n - 3] * A[n - 2] * A[n - 1],
    A[0] * A[1] * A[2]
  );
}
