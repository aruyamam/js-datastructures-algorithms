export function functorialItrative(number) {
   if (number < 0) {
      return undefined;
   }
   let total = 1;
   for (let n = number; n > 1; n--) {
      total *= n;
   }
   return total;
}
