/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities(layers) {
  let ingredients = {
    noodles: 0,
    sauce: 0
  };

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      ingredients['noodles'] += 50;
    }
    if (layers[i] === 'sauce') {
      ingredients['sauce'] += 0.2;
    }
  }

  return ingredients;
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];

  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  
  for (let key in recipe) {
    scaledRecipe[key] = recipe[key] * (portions / 2);
  }

  return scaledRecipe;
}
