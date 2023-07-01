import { createContext } from "react";

interface CartContextType {
  showCart: boolean;
  cartItems: any[]; // Replace "any[]" with the appropriate type for your cart items
  addToCart: (item: any) => void; // Replace "any" with the appropriate type for your item
  increaseItem: (item: any) => void; // Replace "any" with the appropriate type for your item
  decreaseItem: (item: any) => void; // Replace "any" with the appropriate type for your item
  showHideCart: () => void;
  removeItem: (id: any) => void; // Replace "any" with the appropriate type for your item ID
}

const CartContext = createContext<CartContextType>({
  showCart: false,
  cartItems: [],
  addToCart: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
  showHideCart: () => {},
  removeItem: () => {},
});

export default CartContext;
