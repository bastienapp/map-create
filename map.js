// triple toutes les valeurs d'un tableau
function tripleNumbers(numbers) {
  return numbers.map((number) => {
    return number * 3;
  });
}

console.log(tripleNumbers([1, 2, 3]));

/*
Exemple d'entrée:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]
En sortie: [
 7,
 5,
 4,
 10
]
 */

function getStringsLength(strings) {
  return strings.map((food) => {
    return food.length;
  });
}
console.log(getStringsLength(['Chicken', 'Bacon', 'Tofu', 'Mayonnaise']));

/*
Exemple d'entrée:
  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',
      isVegetarian: true
    }
  ]
En sortie: [
  'Bacon is not suitable for vegetarians',
  'Sausage is not suitable for vegetarians',
  'Tofu is suitable for vegetarians',
  'Chick Pea is suitable for vegetarians'
]
 */

function getFoodCategories(foods) {
  return foods.map((aliment) => {
    /*
    aliment: {
      food: 'Bacon',
      isVegetarian: false
    }
    */
    if (aliment.isVegetarian) {
      return `${aliment.food} is suitable for vegetarians`;
    } else {
      return `${aliment.food} is not suitable for vegetarians`;
    }
    // 'Bacon is not suitable for vegetarians'
  });
}
console.log(
  getFoodCategories([
    {
      food: 'Bacon',
      isVegetarian: false,
    },
    {
      food: 'Sausage',
      isVegetarian: false,
    },
    {
      food: 'Tofu',
      isVegetarian: true,
    },
    {
      food: 'Chick Pea',
      isVegetarian: true,
    },
  ])
);

/*
Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 90,
      freshness: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      freshness: 'rotten'
    },
    {
      name: 'Leave No Trace',
      freshness: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      freshness: 'fresh'
    }
  ]

  >= 90 certified fresh
  >= 50 fresh
  < 50 rotten
 */

function getMoviesFreshness(movies) {
  return movies.map((movie) => {
    if (movie.rating >= 90) {
      movie.freshness = 'certified fresh';
    } else if (movie.rating >= 50) {
      movie.freshness = 'fresh';
    } else {
      movie.freshness = 'rotten';
    }
    delete movie.rating;
    return movie;
  });
}

console.log(
  getMoviesFreshness([
    {
      name: 'Crazy Rich Asians',
      rating: 93,
    },
    {
      name: 'Skyscraper',
      rating: 46,
    },
    {
      name: 'Leave No Trace',
      rating: 100,
    },
    {
      name: 'White Boy Rick',
      rating: 60,
    },
  ])
);
