const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
        for (let num of numbers) {
            table[i + num] = [...table[i], num];
        }
    }
  }
  return table[targetSum];
};

// m: targetSum, n: numbers.length
// time: O(m^2 * n)
// space: O(m^2)

console.log(howSum(4, [2,4,5,3])); // [2, 2]
console.log(howSum(7, [2,4])); // null
console.log(howSum(8, [2,3,5])); // [2, 2, 2, 2]
console.log(howSum(300, [14,7])); // null