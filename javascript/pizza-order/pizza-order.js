/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  console.log(extras.length)
  if (extras.length > 0) {
    const extraValues = extras.reduce((acc, currentValue) => {
      if (currentValue === 'ExtraSauce') {
        acc++;
      } else {
        acc += 2;
      }

      return acc;
    }, 0);

    return extraValues + pizzaPrice(pizza);
  }

  switch (pizza) {
    case 'Margherita':
      return 7;
    case 'Caprese':
      return 9;
    case 'Formaggio':
      return 10;
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
  [
    PizzaOrder { pizza: 'Margherita', extras: [] },
    PizzaOrder { pizza: 'Caprese', extras: [ 'ExtraToppings' ] }
  ]
 */
export function orderPrice(pizzaOrders) {
  const price = pizzaOrders.reduce((acc, currentValue) => {
    let extraValues = 0;

    if (currentValue.extras.length > 0) {
      extraValues = currentValue.extras.reduce((extraAcc, currentExtra) => {
        if (currentExtra === 'ExtraSauce') {
          extraAcc++;
        } else {
          extraAcc += 2;
        }
  
        return extraAcc;
      }, 0);
  
      acc += extraValues;
    }

    switch (currentValue.pizza) {
      case 'Margherita':
        acc += 7;
        break;
      case 'Caprese':
        acc += 9;
        break;
      case 'Formaggio':
        acc += 10;
        break;
    }
    
    return acc;
  }, 0);

  return price;
}
