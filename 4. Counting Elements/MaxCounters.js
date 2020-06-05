// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // A = [3, 4, 4, 6, 1, 4, 4, 6, 2]
  // N counters, ej: N = 5
  // [0, 0, 0, 0, 0]
  // [0, 0, 1, 2, 0]
  // set all to 2 = curMax
  // [0, 0, 1, 2, 0]
  // 1 comes:
  // [2 + 1, 0, 1, 2, 0] = [3, 0, 1, 2, 0]
  // 4 comes:
  // [3, 0, 1, 2 + 1, 0] = [3, 0, 1, 3, 0]
  // 4 comes:
  // [3, 0, 1, 3 + 1, 0] = [3, 0, 1, 4, 0]
  // curMax = 4
  // prevMax = 2
  // 6 comes:
  // set all to 6 = curMax
  // curMax = 4
  // prevMax = 4
  // 2 comes:
  // [3, 4 + 1, 1, 4, 0] = [3, 5, 1, 4, 0] -> curMax = 5
  // [4, 5, 4, 4, 4]
  let counters = new Array(N).fill(0);
  let prevMax = 0;
  let curMax = 0;
  for (let i = 0; i < A.length; i++) {
    let X = A[i];
    if (X <= N) {
      counters[X - 1] = Math.max(prevMax, counters[X - 1]) + 1;
      curMax = Math.max(curMax, counters[X - 1]);
    } else {
      // X == N + 1
      prevMax = curMax;
    }
  }

  for (let i = 0; i < N; i++) {
    counters[i] = Math.max(counters[i], prevMax);
  }

  return counters;
}
