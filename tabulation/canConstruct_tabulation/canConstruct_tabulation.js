const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    
    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                // if the word matches the characters starting at position i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
};

// m: target.length , n: wordBank.length
// time complexity: O(m * m * n)
// space complexity: O(m^2)

console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // true
console.log(canConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // false
console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','eeeec','ee','eeee','eeeeeeeee']));