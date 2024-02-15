import React, { createContext, useState } from "react";
import { useReducer } from "react";

const shoppingCartInitialState = {
  items: [],
  totalValue: 0,
}

const shoppingCartReducer = (shoppingCart, action) => {
  console.log('entra aca', shoppingCart, action)
  switch(action.type) {
    
    case 'add': {
        const isProductFound = shoppingCart.items.find((item) => item._id === action.product._id);
      if (isProductFound) {
        return {
          totalValue: shoppingCart.totalValue + 0,
          items: shoppingCart.items.map((item) =>
          item._id === action.product._id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        )
        }
      }
      
      return { totalValue: 0, items: [...shoppingCart.items, { ...action.product, quantity: action.quantity }]};
    }
    case 'new': {
      const isProductFound = shoppingCart.items.find((item) => item._id === action.product._id);
    if (isProductFound) {
      return {
        totalValue: shoppingCart.totalValue + action.product.price,
        items: shoppingCart.items.map((item) =>
        item._id === action.product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      }
    }
    
    return { totalValue: shoppingCart.totalValue + action.product.price, items: [...shoppingCart.items, { ...action.product, quantity: 1 }]};
  }
    case 'clean': {
      const isProductFound = shoppingCart.items.find((item) => item._id === action.id);
      return { totalValue: isProductFound ? shoppingCart.totalValue - isProductFound.price * isProductFound.quantity : shoppingCart.totalValue,
      items: shoppingCart.items.filter(item => item._id !== action.id) }
    }
    case 'remove': {
      const isProductFound = shoppingCart.items.find((item) => item._id === action.id);
      return { totalValue: isProductFound ? shoppingCart.totalValue - isProductFound.price * isProductFound.quantity : shoppingCart.totalValue,
      items: shoppingCart.items.map(item => item._id === action.id ? { ...item, quantity: item.quantity - 1 } : item ) }
    }
    default: return shoppingCart;
  }
}

export const CartContext = createContext({ shoppingCart: [], dispatch: () => null });

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState);

  return (
    <CartContext.Provider value={{ shoppingCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
