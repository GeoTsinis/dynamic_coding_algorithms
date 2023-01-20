const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (num of numbers) {
        const remaider = targetSum - num;
        const remaiderResult = howSum(remaider, numbers, memo);
        if (remaiderResult !== null) {
            memo[targetSum] = [...remaiderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
    
};


console.log(howSum(4, [2,4,5,3])); 
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5])); 
console.log(howSum(300, [14,4])); 

// m: target sum, n: numbers length
//time complexity: O(n*m^2)
//space complexity: O(m^2)