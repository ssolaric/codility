// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// https://math.stackexchange.com/questions/2668818/subarray-minimal-average

function solution(A) {
  // A = [4, 2, 2, 5, 1, 5, 8]
  let n = A.length;
  let minAverage = 1e9;
  let ansInd = 0;
  for (let P = 0; P < n - 1; P++) {
    let slice2 = (A[P] + A[P + 1]) / 2;
    if (minAverage > slice2) {
      minAverage = slice2;
      ansInd = P;
    }
    if (P < n - 2) {
      let slice3 = (A[P] + A[P + 1] + A[P + 2]) / 3;
      if (minAverage > slice3) {
        minAverage = slice3;
        ansInd = P;
      }
    }
  }
  return ansInd;
}
