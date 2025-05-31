import React from "react";  

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  return (
    <CartContext.Provider value={{cart,setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return React.useContext(CartContext);
};

export { CartProvider, useCart};