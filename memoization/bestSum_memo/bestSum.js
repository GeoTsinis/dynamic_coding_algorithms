const bestSum = (targetSum, numbers) => {
    if (targetSum < 0 ) return null;
    if (targetSum === 0) return [];

    let shortestCombination = null;

    for (let num of numbers) {
        const remaider = targetSum - num;
        const remaiderCombination = bestSum(remaider, numbers);
        if (remaiderCombination !== null) {
            const combination = [...remaiderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};

//m: targetSum, n: numbers length 
//Time complexity: O((n^m)*m)
//Space complexity: O(m^2)

console.log(bestSum(4, [2,4,5,3])); 
console.log(bestSum(7, [2,4]));
console.log(bestSum(8, [2,3,5])); 
console.log(bestSum(300, [14,4])); 