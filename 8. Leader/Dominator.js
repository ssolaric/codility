function solution(A) {
  let n = A.length;
  let counter = {};
  for (let x of A) {
    if (x in counter) {
      counter[x] += 1;
    } else {
      counter[x] = 1;
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (counter[A[i]] > Math.floor(n / 2)) {
      return i;
    }
  }

  return -1;
}
