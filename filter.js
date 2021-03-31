function getPositiveNumbers(numbers) {
  return numbers.filter((number) => number >= 0);
}
console.log(getPositiveNumbers([5, -2, 8, 7, -1]));

function getMultiplesOf(numbers, n) {
  const result = numbers.filter((number) => {
    if (number % n === 0) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
console.log(getMultiplesOf([5, -2, 8, 7, 9, -12, -1], 2));

/*
Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]
Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']
 */

function keepStarks(names) {
  return names.filter((name) => name.includes('Stark'));
}
console.log(
  keepStarks([
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark',
  ])
);

/*
1. tableau de produits:
[
  { name: 'iPhone X', price: 1159 },
  { name: 'Xiaomi Mi A2', price: 209 },
  { name: 'Samsung Galaxy Note 9', price: 992 },
  { name: 'Huawei P20', price: 480 },
  { name: 'Huawei P20 Pro', price: 649 }
]
2. prix maximum: 500
Sortie attendue:
  [
    { name: 'Xiaomi Mi A2', price: 209 },
    { name: 'Huawei P20', price: 480 }
  ]
 */

function filterOnPrice(products, maxPrice) {}
