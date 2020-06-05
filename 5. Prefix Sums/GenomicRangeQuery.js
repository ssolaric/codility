// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function createBlocks(A) {
  let n = A.length;
  let b = Math.ceil(Math.sqrt(n));
  // n = 7, b = 3
  // [2, 1, 3, 2, 2, 4, 1]
  let blocks = [];
  for (let i = 0; i < n; i += b) {
    let partialMin = 4;
    for (let j = i; j < i + b; j++) {
      partialMin = Math.min(partialMin, A[j]);
    }
    blocks.push(partialMin);
  }
  // [1, 2, 1]
  return blocks;
}

function solution(S, P, Q) {
  // Each nucleotide has an impact factor
  // A -> 1, C -> 2, G -> 3, T -> 4
  // S = "CAGCCTA"
  // Impact factors: [2, 1, 3, 2, 2, 4, 1]
  // P = [2, 5, 0]
  // Q = [4, 5, 6]
  let impactFactors = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  let factors = [];
  for (let i = 0; i < S.length; i++) {
    factors.push(impactFactors[S[i]]);
  }
  let minimums = createBlocks(factors);
  let n = factors.length;
  let b = Math.ceil(Math.sqrt(n));
  let M = P.length;
  let ans = [];

  for (let i = 0; i < M; i++) {
    let left = P[i];
    let right = Q[i];
    let minImpactFactor = 4;

    let leftBlock = Math.floor(left / b);
    let rightBlock = Math.floor(right / b);

    if (leftBlock == rightBlock) {
      for (let j = left; j <= right; j++) {
        minImpactFactor = Math.min(minImpactFactor, factors[j]);
      }
    } else {
      // 1. Traverse leftBlock
      for (let j = left; j < (leftBlock + 1) * b; j++) {
        minImpactFactor = Math.min(minImpactFactor, factors[j]);
      }
      // 2. Traverse minimums
      for (let j = leftBlock + 1; j < rightBlock; j++) {
        minImpactFactor = Math.min(minImpactFactor, minimums[j]);
      }
      // 3. Traverse rightBlock
      for (let j = rightBlock * b; j <= right; j++) {
        minImpactFactor = Math.min(minImpactFactor, factors[j]);
      }
    }
    ans.push(minImpactFactor);
  }

  return ans;
}
