function factorialIterative(number) {
   if (number < 0) {
      return undefined;
   }
   let total = 1;
   for (let n = number; n > 1; n--) {
      total *= n;
   }
   return total;
}

console.log(factorialIterative(5));

function factorial(n) {
   console.trace();
   if (n === 1 || n === 0) {
      return 1;
   }
   return n * factorial(n - 1);
}

console.log(factorial(5));
