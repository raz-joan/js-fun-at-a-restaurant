function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  } else {
    return deliveryOrders;
  }
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var listOfItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    listOfItems.push(deliveryOrders[i].item);
  }
  return listOfItems.join(', ');
}

function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemName) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
