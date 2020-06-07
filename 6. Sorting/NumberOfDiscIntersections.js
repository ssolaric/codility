// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function upper_bound(A, target, ini, fin) {
  let n = A.length;
  while (ini < fin) {
    let mid = Math.floor((ini + fin) / 2);
    if (A[mid] > target) {
      fin = mid;
    } else {
      ini = mid + 1;
    }
  }
  return ini;
}

function solution(A) {
  // A = [1, 5, 2, 1, 4, 0]
  // 1 + 4 + 4 + 2
  // A[0] -> [-1, 1]
  // A[1] -> [-4, 6]
  // A[2] -> [0, 4]
  // A[3] -> [2, 4]
  // A[4] -> [0, 8]
  // A[5] -> [5, 5]
  let intervals = [];
  for (let i = 0; i < A.length; i++) {
    intervals.push([i - A[i], i + A[i]]);
  }
  intervals.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  // [[-4, 6], [-1, 1], [0, 4], [0, 8], [2, 4], [5, 5]]
  let n = A.length;
  let leftEndpoints = intervals.map((a) => a[0]);
  let rightEndpoints = intervals.map((a) => a[1]);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let firstGreater = upper_bound(leftEndpoints, rightEndpoints[i], i + 1, n);
    ans += firstGreater - (i + 1);
  }
  return ans;
}
