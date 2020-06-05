// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  let spaces = new Set();
  for (let i = 0; i < A.length; i++) {
    spaces.add(A[i]);
    if (spaces.size == X) {
      return i;
    }
  }
  return -1;
}
