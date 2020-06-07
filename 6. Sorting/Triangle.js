// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // A = [10, 2, 5, 1, 8, 20]
  // [1, 2, 5, 8, 10, 20]
  A.sort((a, b) => a - b);
  let n = A.length;
  if (n < 3) {
    return 0;
  }
  for (let i = 0; i < n - 2; i++) {
    if (
      A[i] + A[i + 1] > A[i + 2] &&
      A[i + 1] + A[i + 2] > A[i] &&
      A[i] + A[i + 2] > A[i + 1]
    ) {
      return 1;
    }
  }
  return 0;
}
