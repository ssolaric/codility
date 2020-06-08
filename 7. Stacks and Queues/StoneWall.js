// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(H) {
  // H = [8, 8, 5, 7, 9, 8, 7, 4, 8]
  // ans = 7
  let stack = [];
  let ans = 0;
  for (let height of H) {
    while (stack.length > 0 && stack[stack.length - 1] > height) {
      stack.pop();
    }
    // The condition in the while statement returns false for at least one of the following cases:
    // 1. The stack is empty
    // In this case, we add a new height to the stack.
    // 2. The stack is not empty and its top is less to height.
    // In this case, we found a height greater than the last height recorded in the
    // stack. We push it to the stack in order to have a monotonic (increasing) stack.
    // 3. The stack is not empty and its top is equal to height. We do nothing.
    if (stack.length == 0 || stack[stack.length - 1] < height) {
      // empty stack
      ans++;
      stack.push(height);
    }
  }
  return ans;
}
