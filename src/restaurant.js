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
  if (foodItem.type === 'breakfast') {
    if (restaurant.menus.breakfast.includes(foodItem)) {
      return restaurant;
    } else {
      restaurant.menus.breakfast.push(foodItem);
    }
  } else if (foodItem.type === 'lunch') {
    if (restaurant.menus.lunch.includes(foodItem)) {
      return restaurant;
    } else {
      restaurant.menus.lunch.push(foodItem);
    }
  } else if (foodItem.type === 'dinner') {
    if (restaurant.menus.dinner.includes(foodItem)) {
      return restaurant;
    } else {
      restaurant.menus.dinner.push(foodItem);
    }
  }
  return restaurant;
}

function removeMenuItem(restaurant, foodName, menuName) {
  if (menuName === 'breakfast') {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (restaurant.menus.breakfast[i].name === foodName) {
        restaurant.menus.breakfast.splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`;
      }
    }
  } else if (menuName === 'lunch') {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (restaurant.menus.lunch[i].name === foodName) {
        restaurant.menus.lunch.splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`;
      }
    }
  } else if (menuName === 'dinner') {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (restaurant.menus.dinner[i].name === foodName) {
        restaurant.menus.dinner.splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`;
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
