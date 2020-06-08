// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "(") {
      count++;
    } else {
      if (count == 0) {
        return 0;
      }
      count--;
    }
  }
  return count == 0 ? 1 : 0;
}
