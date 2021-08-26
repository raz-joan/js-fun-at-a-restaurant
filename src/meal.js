function nameMenuItem(item) {
  return "Delicious " + item;
}

function createMenuItem(item, price, type) {
  var menuItem = {
    name: item,
    price: price,
    type: type
  }
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    // do nothing
  } else {
    ingredients.push(ingredient);
  }
  return ingredients;
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(price) {
  return price - (price * 0.1);
}

function createRecipe(title, ingredients, menuType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuType
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
