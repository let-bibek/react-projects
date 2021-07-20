const reducer = (state, action) => {
  let returnVal = state;
  switch (action.type) {
    case "CLEAR_CART":
      returnVal = { ...state, cart: [] };
      break;
    case "REMOVE":
      returnVal = {
        ...state,
        cart: state.cart.filter((car) => car.id !== action.payload),
      };
      break;
    case "INCREASE":
      const incCart = state.cart.map((cartItem) => {
        if (action.payload === cartItem.id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      returnVal = { ...state, cart: incCart };
      break;
    case "DECREASE":
      const decCart = state.cart
        .map((cartItem) => {
          if (action.payload === cartItem.id) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartamount) => cartamount.amount > 0);
      returnVal = { ...state, cart: decCart };
      break;

    case "GET_TOTAL":
      let { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;

          const totalItem = price * amount;
          cartTotal.total += totalItem;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      returnVal = { ...state, amount, total };
      break;
    case "LOADING":
      returnVal = { ...state, loading: true };
      break;
    case "DISPLAY":
      returnVal = { ...state, cart: action.payload, loading: false };
      break;
    default:
      return state;
  }

  return returnVal;

  // return returnVal;
};
export default reducer;
