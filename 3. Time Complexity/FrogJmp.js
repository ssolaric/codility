// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  // X + k * D >= Y
  // k >= (Y - X) / D
  return Math.ceil((Y - X) / D);
}
