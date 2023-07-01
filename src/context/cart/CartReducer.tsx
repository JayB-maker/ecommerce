import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SHOW_HIDE_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../Types";

const CartReducer = (state: any, action: any) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const tempItem = state.cartItems.find(
        (item: any) => item.id === action.payload.id
      );
      if (tempItem) {
        // Item already exists in the cart, return the current state
        return state;
      } else {
        // Item doesn't exist in the cart, add it to the cartItems array
        const updatedCartItemsAdd = [...state.cartItems, action.payload];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItemsAdd));
        return {
          ...state,
          cartItems: updatedCartItemsAdd,
        };
      }
    }
    case INCREASE_ITEM: {
      const updatedCartItemsIncrease = state.cartItems.map((item: any) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItemsIncrease)
      );
      return {
        ...state,
        cartItems: updatedCartItemsIncrease,
      };
    }

    case DECREASE_ITEM: {
      const updatedCartItemsDecrease = state.cartItems.map((item: any) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItemsDecrease)
      );
      return {
        ...state,
        cartItems: updatedCartItemsDecrease,
      };
    }
    case REMOVE_ITEM: {
      const updatedCartItemsRemove = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItemsRemove));
      return {
        ...state,
        cartItems: updatedCartItemsRemove,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
