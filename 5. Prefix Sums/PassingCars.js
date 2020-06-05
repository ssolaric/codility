// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // A = [0, 1, 0, 1, 1]
  // _  _  _  _  _
  // ->    ->
  //   <-    <- <-
  // A =  []
  // PS = [_, 0, 1, 1, 2, 3]
  // PS[i] = A[0] + A[1] + ... A[i-1]
  let n = A.length;
  let prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + A[i];
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] == 0) {
      ans += prefixSum[n] - prefixSum[i + 1];
    }
  }
  if (ans > 1000000000) {
    ans = -1;
  }
  return ans;
}
