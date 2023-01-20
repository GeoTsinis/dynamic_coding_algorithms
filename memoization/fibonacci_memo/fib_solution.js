const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n -2);
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(50));

// Time complexity : 2^n
// Space complexity : n 
