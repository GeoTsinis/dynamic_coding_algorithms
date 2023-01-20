const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 ) return true;
    if (targetSum < 0) return false;
    
    for (let num of numbers) {
        const remaider = targetSum - num;
        if (canSum(remaider, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum(4, [2,4,5,3])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(300, [7, 14])); // false

// m: target sum , n: array length 
//time complexity = O(m*n)
//space complexity = O(m)