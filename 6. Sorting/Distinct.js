// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // A = [2, 1, 1, 2, 3, 1]
  let unique = new Set();
  // "let of" iterates directly over the values of the array.
  for (let x of A) {
    unique.add(x);
  }
  return unique.size;
}
