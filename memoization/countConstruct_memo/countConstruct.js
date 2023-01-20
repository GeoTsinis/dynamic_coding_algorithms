const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    let totalCount = 0;

    for (word of wordBank) {
        if (target.indexOf(word) === 0) {
           const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }
    return totalCount;
};

console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // 1
console.log(countConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','eeeec','ee','eeee','eeeeeeeee'])); // 0