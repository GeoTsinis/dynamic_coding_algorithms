const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const res = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            res.push(...targetWays);
        }
    }
    memo[target] = res;
    return memo[target];
};

//m: target.length , n: wordBank.length
//time: O(n*m^2)
//space: O(m^2)


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // ['purp', 'le'], ['p', 'ur', 'p', 'le']
console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // ['abc', 'def']
console.log(allConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // []
console.log(allConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // ['enter', 'a', 'p', 'ot', 'ent', 'p', 'ot'], ['enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't'], ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot'], ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't']
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','eeeec','ee','eeee','eeeeeeeee'])); // []