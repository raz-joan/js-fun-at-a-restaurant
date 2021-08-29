function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return restaurant;
}

function addMenuItem(restaurant, foodItem) {
  if (restaurant.menus[foodItem.type].includes(foodItem)) {
    return restaurant;
  } else {
    restaurant.menus[foodItem.type].push(foodItem);
    return restaurant;
  }
}

function removeMenuItem(restaurant, foodName, menuName) {
  for (var i = 0; i < restaurant.menus[menuName].length; i++) {
    if(restaurant.menus[menuName][i].name === foodName) {
      restaurant.menus[menuName].splice(i, 1);
      return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`;
    }
  }
  return `Sorry, we don't sell ${foodName}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
