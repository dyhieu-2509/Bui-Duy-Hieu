function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    return (n * (n + 1)) / 2;
}
function sum_to_n_c(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_c(n - 1);
}
console.log("a:", sum_to_n_a(5));
console.log("b:", sum_to_n_b(5));
console.log("c:", sum_to_n_c(5));
