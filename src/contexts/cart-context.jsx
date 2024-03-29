import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setItems] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    cartItems,

    cartItemsCount: cartItems.reduce((sum, { count }) => sum + count, 0),

    addToCart: (item) => {
      if (cartItems.find((x) => x.id === item.id)) {
        setItems(cartItems.map((x) => (x.id === item.id ? { ...x, count: item.count } : x)));
      } else {
        setItems([...cartItems, item]);
      }
    },
    getItemCount: (id) => cartItems.find((x) => x.id === id)?.count ?? 0,

    deleteItem: (id) => setItems(cartItems.filter((x) => x.id !== id)),

  }), [cartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
