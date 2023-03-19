import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const overall = {
    overallPrice: cart.reduce((a, b) => a + b.price * b.qty, 0),
    overallDiscount: cart.reduce((a, b) => a + b.discountedPrice * b.qty, 0),
  };

  const handleCart = (data) => {
    const index = cart.findIndex((item) => item.id === data.id);
    if (index === -1) {
      setCart([...cart, { ...data, qty: 1 }]);
      return;
    }
    if (index !== -1 && !data.qty) {
      return;
    }
    if (index !== -1) {
      const payload = [...cart];
      payload[index] = { ...payload[index], qty: data.qty };
      setCart(payload);
      return;
    }
  };

  const handleRemove = (id) => {
    const payload = cart.filter((item) => item.id !== id);
    setCart(payload);
  };

  const value = {
    cart,
    handleCart,
    handleRemove,
    overall,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
