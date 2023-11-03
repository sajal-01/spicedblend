const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADD_PRODUCT_TO_BASKET') {
    console.log('action.payload', action.payload);
    if (state.cart.some((item) => item.id === action.payload.id)) {
      console.log('Item already exists in cart, updating quantity...');
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
        total: state.total + action.payload.price,
        totalItems: state.totalItems + 1,
      };
    }
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + action.payload.price,
      totalItems: state.totalItems + 1,
    };
  }
  if (action.type === 'REMOVE_PRODUCT_FROM_BASKET') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
      total: state.total - action.payload.price,
      totalItems: state.totalItems - 1,
    };
  }
  if (action.type === 'INCREASE_PRODUCT_QTY') {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      ),
      total: state.total + action.payload.price,
      totalItems: state.totalItems + 1,
    };
  }
  if (action.type === 'DECREASE_PRODUCT_QTY') {
    console.log('Previous state:', state);

    if (action.payload.qty === 1) {
      console.log('Removing item from cart...');
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.originalPrice,
        totalItems: state.totalItems - 1,
      };
    }

    console.log('Updating item quantity...');
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      ),
      total: state.total - action.payload.originalPrice,
      totalItems: state.totalItems - 1,
    };
  }

  return state;
};

export default cartReducer;
