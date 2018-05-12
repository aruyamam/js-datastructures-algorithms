let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

console.log('Using the new ES6 iterator(@@iterator)');

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

interator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log(n);
}

let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(n);
}

console.log('Array.keys');
const aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

console.log('Array.values');
const aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

let numbers2 = Array.from(numbers);
console.log(numbers2);

let evens = Array.from(numbers, x => x % 2 === 0);
console.log(evens);

let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5,6);
console.log(numbers3);
console.log(numbers4);

let numbersCopy = Array.of(...numbers4);
console.log(numbersCopy);

numbersCopy.fill(0);
console.log(numbersCopy);

numbersCopy.fill(2, 1);
console.log(numbersCopy);

numbersCopy.fill(1, 3, 5);
console.log(numbersCopy);

let ones = Array(6).fill(1);
console.log(ones);

console.log('Using the copyWithin method');
let copyArray = [1, 2, 3, 4, 5, 6];

copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray);


console.log('methods find and findIndex');

function multipleOf13(element, index, array) {
  return (element % 13 == 0);
}

console.log('numbers.find(multipleOf13)', numbers.find(multipleOf13));
console.log('numbers.findIndex(multipleOf13)', numbers.findIndex(multipleOf13));

console.log('EcmaScript 2016 (ES7): using the method includes');

console.log('numbers.includes(15)', numbers.includes(15));
console.log('numbers.includes(20)', numbers.includes(20));

const numbers5 = [7, 6, 5, 4, 3, 2, 1];
console.log('numbers5.includes(4, 5)', numbers5.includes(4, 5));