function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

function sum_to_n_c(n: number): number {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_c(n - 1);
}

console.log("a:", sum_to_n_a(5)); 
console.log("b:", sum_to_n_b(5));  
console.log("c:", sum_to_n_c(5));
