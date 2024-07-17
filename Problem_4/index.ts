// Task:
// Provide 3 unique implementations of the following function in TypeScript.

// - Comment on the complexity or efficiency of each function.

// **Input**: `n` - any integer
// Output: return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.


// Approach 1: Using normal loop
// Time complexity: O(n)
// Space complexity: O(1)
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Approach 2: Using recurion
// Time complexity: O(n)
// Space complexity: O(1)
function sum_to_n_b(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_b(n - 1);
}

// Approach 3: Using Math formula
// Time complexity: O(1)
// Space complexity: O(1)
function sum_to_n_c(n: number): number {
  return n * (n + 1) / 2;
}


// Testing
function problem4_sumToN_ReturnsNumber() {
  // Arrange
  const n = 5;
  const expected = 15;

  // Act
  const result_a = sum_to_n_a(n);
  const result_b = sum_to_n_b(n);
  const result_c = sum_to_n_c(n);

  // Assert
  if (result_a === expected && result_b === expected && result_c === expected) {
    console.log('All tests passed.');
  } else {
    console.log('Some tests failed.');
  }
}

// Run function
problem4_sumToN_ReturnsNumber();