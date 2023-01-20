const gridTraveler = (m,n) => {
    if (m == 0 || n == 0) return 0;
    if (m == 1 && n == 1) return 1;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1,1));  //1
console.log(gridTraveler(3,2));  //3
console.log(gridTraveler(6,5));  //126
console.log(gridTraveler(18,18)); //2333606220

//Time complexity: O(2^m+n)
// Space complexity: O(m+n) 