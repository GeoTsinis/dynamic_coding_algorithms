const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    console.log(table);
    return table[targetSum];
};

// m: targetSum, n: numbers.length
// time: O(m*n)
// space: O(m)

console.log(canSum(4, [2,4,5,3])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(300, [7, 14])); // false