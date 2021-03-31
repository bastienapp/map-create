const fruits = ['pommes', 'prunes', 'cerises'];
fruits.forEach((fruit) => {
  console.log(`J'aime les ${fruit}`);
});

const numbers = [1, 5, 7, 8, 9, 12];
const evenValues = numbers.filter((number) => number % 2 === 0);
console.log(numbers, evenValues);

const newArray = [];
const filterEven = numbers.forEach((number) => {
  if (number % 2 === 0) {
    newArray.push(number);
  }
});
console.log(numbers, newArray);
