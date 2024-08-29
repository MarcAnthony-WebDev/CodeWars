// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

//My solution

export function comp(a: number[] | null, b: number[] | null): boolean {
  if (!a || !b) return false;

  if (a.length !== b.length) return false;

  const squaredA = a.map((x) => x * x);

  squaredA.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  for (let i = 0; i < squaredA.length; i++) {
    if (squaredA[i] !== b[i]) return false;
  }
  return true;
}
