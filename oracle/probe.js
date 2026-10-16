// Using this method to calculate the square root: https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Binary_numeral_system_(base_2)

const squareRoot = (radicand) => {
  let n = radicand;
  let bit = 1 << 14;
  let result = 0;

  while (bit > n) bit >>= 2;

  while (bit !== 0) {
    if (n >= result + bit) {
      n -= result + bit;
      result = (result >> 1) + bit;
    } else {
      result >>= 1;
    }
    bit >>= 2;
  }
  return result;
};

const __in = [1, 4, 25, 81, 196, 65025];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: squareRoot(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
