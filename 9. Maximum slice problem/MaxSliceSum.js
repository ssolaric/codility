function solution(A) {
  let ans = -Math.pow(2, 51);
  let sum = 0;
  for (let x of A) {
    sum = Math.max(0, sum + x);
    ans = Math.max(ans, sum);
  }
  return ans;
}
