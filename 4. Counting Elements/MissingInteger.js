// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // [1, 3, 6, 4, 1, 2]
  // [_, 2, 1, 1, 1, 0, 1]

  // [-1, -1, -1, -3] -> 1
  // [_, 0, 0, 0]

  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      max = Math.max(max, A[i]);
    }
  }
  if (max == 0) {
    return 1;
  }

  let counter = new Array(max + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      counter[A[i]]++;
    }
  }

  for (let i = 1; i <= max; i++) {
    if (counter[i] == 0) {
      return i;
    }
  }
  return max + 1;
}
