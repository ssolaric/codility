// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function match(open, close) {
  return (
    (open == "(" && close == ")") ||
    (open == "[" && close == "]") ||
    (open == "{" && close == "}")
  );
}

function solution(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "(" || S[i] == "[" || S[i] == "{") {
      stack.push(S[i]);
    } else {
      if (stack.length == 0) {
        return 0;
      }
      let open = stack[stack.length - 1];
      let close = S[i];
      if (match(open, close)) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  return stack.length == 0 ? 1 : 0;
}
