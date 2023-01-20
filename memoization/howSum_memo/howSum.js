const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (num of numbers) {
        const remaider = targetSum - num;
        const remaiderResult = howSum(remaider, numbers);
        if (remaiderResult !== null) return [...remaiderResult, num];
    }

    return null;
};


console.log(howSum(4, [2,4,5,3])); 
console.log(howSum(7, [2,4]));
console.log(howSum(8, [2,3,5])); 
console.log(howSum(300, [14,4])); 

// m: target sum, n: numbers length
//time complexity: O((n^m)*m)
//space complexity: O(m)