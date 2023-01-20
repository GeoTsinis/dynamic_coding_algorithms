const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) { //check if substring is  prefix of target 
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};

// m: target.length , n: wordBank.length
// time complexity: O(n*m^2)
// space complexity: O(m^2)

console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // true
console.log(canConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // false
console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','eeeec','ee','eeee','eeeeeeeee']));