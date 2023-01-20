const canSum = (targetSum, numbers) => {
    
    if (targetSum === 0 ) return true;
    if (targetSum < 0) return false;
    
    for (let num of numbers) {
        const remaider = targetSum - num;
        if (canSum(remaider, numbers)) {
            return true;
        }
    }
    return false;
};

console.log(canSum(4, [2,4,5,3])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(300, [7, 14])); // false

// m: target sum , n: array length 
//time complexity = O(n^m)
//space complexity = O(m)