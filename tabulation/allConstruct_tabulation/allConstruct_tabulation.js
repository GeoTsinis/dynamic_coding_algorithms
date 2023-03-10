const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];
    
    for (let i =0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombination = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombination);
            }
        }
    }
    return table[target.length];
};

//m: target.length , n: wordBank.length
//time: ~O(n^m)
//space: ~O(n^m)

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // ['purp', 'le'], ['p', 'ur', 'p', 'le']
console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // ['abc', 'def']
console.log(allConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // []
console.log(allConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // ['enter', 'a', 'p', 'ot', 'ent', 'p', 'ot'], ['enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't'], ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot'], ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't']
console.log(allConstruct('eeeeeeeeeeeeeeeeeeef', ['e','eeeec','ee','eeee','eeeeeeeee'])); // []