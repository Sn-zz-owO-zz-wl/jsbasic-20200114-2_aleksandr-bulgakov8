/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  if (n <= 1) {
    return result;
  } else for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
