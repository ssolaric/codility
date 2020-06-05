// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let n = A.length;
  let expectedSum = ((n + 1) * (n + 2)) / 2;
  let realSum = 0;
  for (let x of A) {
    realSum += x;
  }
  return expectedSum - realSum;
}
