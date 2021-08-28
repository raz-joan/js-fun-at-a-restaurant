function nameMenuItem(item) {
  return "Delicious " + item;
}

function createMenuItem(menuItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType
  }
  return menuItem;
}

function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
    return ingredients;
  } else {
    ingredients.push(newIngredient);
    return ingredients;
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(price) {
  return price - (price * 0.1);
}

function createRecipe(recipeTitle, recipeIngredients, menuType) {
  var recipe = {
    title: recipeTitle,
    ingredients: recipeIngredients,
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
