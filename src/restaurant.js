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
  var menuNames = ['breakfast', 'lunch', 'dinner'];
  for (var i = 0; i < menuNames.length; i++) {
    if (foodItem.type === menuNames[i]) {
      if (restaurant.menus[menuNames[i]].includes(foodItem)) {
        return restaurant;
      } else {
        restaurant.menus[menuNames[i]].push(foodItem);
        return restaurant;
      }
    }
  }
}

function removeMenuItem(restaurant, foodName, menuName) {
  var menuNames = ['breakfast', 'lunch', 'dinner'];
  for (var j = 0; j < menuNames.length; j++) {
    if (menuName === menuNames[j]) {
      for (var i = 0; i < restaurant.menus[menuName].length; i++) {
        if(restaurant.menus[menuName][i].name === foodName) {
          restaurant.menus[menuName].splice(i, 1);
          return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`;
        }
      }
    }
  }
  return `Sorry, we don't sell ${foodName}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
