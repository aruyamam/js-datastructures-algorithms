const { HashTableLinearProbing } = PacktDataStructuresAlgorithms;

const hashTable = new HashTableLinearProbing();

hashTable.put('Ygritte', 'ygritte@email.com');
hashTable.put('Jonathan', 'jonathan@email.com');
hashTable.put('Jamie', 'jamie@email.com');
hashTable.put('Jack', 'jack@email.com');
hashTable.put('Jasmine', 'jasmine@email.com');
hashTable.put('Jake', 'jake@email.com');
hashTable.put('Nathan', 'nathan@email.com');
hashTable.put('Athelstan', 'athelstan@email.com');
hashTable.put('Sue', 'sue@email.com');
hashTable.put('Aethelwulf', 'aethelwulf@email.com');
hashTable.put('Sargeras', 'sargeras@email.com');

console.log('**** Printing Hash **** ');

console.log(hashTable.toString());

console.log('**** Get **** ');

console.log(hashTable.get('Nathan'));
console.log(hashTable.get('Loiane'));

console.log('**** Remove **** ');

hashTable.remove('Ygritte');
console.log(hashTable.get('Ygritte'));
console.log(hashTable.toString());

console.log('**** Remove Test 2 **** ');
console.log('Removing Jonathan', hashTable.remove('Jonathan')); // true
console.log('**** Print **** ');
console.log(hashTable.toString());

console.log(hashTable.get('Jamie'));
console.log('**** Print **** ');
console.log(hashTable.toString());
