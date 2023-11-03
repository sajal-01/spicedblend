export const addProductToBasket = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_BASKET',
    payload: product,
  };
};

export const removeProductFromBasket = (product) => {
  return {
    type: 'REMOVE_PRODUCT_FROM_BASKET',
    payload: product,
  };
};

export const increaseProductQty = (product) => {
  return {
    type: 'INCREASE_PRODUCT_QTY',
    payload: product,
  };
};

export const decreaseProductQty = (product) => {
  return {
    type: 'DECREASE_PRODUCT_QTY',
    payload: product,
  };
};
