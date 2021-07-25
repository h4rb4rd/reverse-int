module.exports = function reverse (n) {
    const num = Math.abs(n);
    return +num.toString().split("").reverse().join("");
}
