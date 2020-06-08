// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // A = [4, 3, 2, 1, 5]
  // B = [0, 1, 0, 0, 0]
  let stack = [];
  let n = A.length;
  let deadCount = 0;
  for (let i = 0; i < n; i++) {
    if (B[i] == 0) {
      while (stack.length > 0) {
        // Let's try to eat the fish in the stack.
        let fishToEat = stack[stack.length - 1];
        if (A[i] > fishToEat) {
          // This upstream fish eats a downstream fish.
          deadCount++;
          stack.pop();
        } else {
          // This upstream fish gets eaten.
          deadCount++;
          break;
        }
      }
    } else {
      // Push downstream fish to the stack
      stack.push(A[i]);
    }
  }
  return n - deadCount;
}
