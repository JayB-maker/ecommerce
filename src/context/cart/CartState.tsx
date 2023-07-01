import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART, INCREASE_ITEM, DECREASE_ITEM } from "../Types";
import { ReactNode, useReducer } from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

const CartState = (props: { children: ReactNode }) => {
  const { children } = props;

  const getInitialCartItems = (): CartItem[] => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  };

  const initialState = {
    showCart: false,
    cartItems: getInitialCartItems(),
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item: any) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const increaseItem = (item: any) => {
    dispatch({ type: INCREASE_ITEM, payload: item });
  };

  const decreaseItem = (item: any) => {
    dispatch({ type: DECREASE_ITEM, payload: item });
  };

  const removeItem = (id: any) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        increaseItem,
        decreaseItem,
        removeItem,
      }}
    >{children}</CartContext.Provider>
  );
};

export default CartState;
