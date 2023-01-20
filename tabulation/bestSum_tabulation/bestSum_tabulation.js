const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [ ...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length) {
                table[i + num] = combination; 
                }
            }
        }
    }

    return table[targetSum];
};


//m: targetSum, n: numbers length 
//Time complexity: O(m^2 * n)
//Space complexity: O(m^2)

console.log(bestSum(4, [2,4,5,3])); // [4]
console.log(bestSum(7, [2,4])); // null
console.log(bestSum(8, [2,3,5])); // [3,5]
console.log(bestSum(300, [14,4])); // [4, 4, 4, 4, 4, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14]