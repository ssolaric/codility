// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let n = A.length;
  let counter = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (A[i] > n) {
      return 0;
    }
    counter[A[i]]++;
    if (counter[A[i]] > 1) {
      return 0;
    }
  }
  return 1;
}
