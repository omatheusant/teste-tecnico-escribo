function sumDivisibleNumbers(num) {
  return Array.from({ length: num - 1 }, (_, i) => i + 1)
    .filter((n) => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}
const result = sumDivisibleNumbers(10)
console.log(result)
