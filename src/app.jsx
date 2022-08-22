import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import PageRoutes from './pages/routes/page-routes';
import CartContext from './contexts/cart-context';

const App = () => {
  const [cartItems, setItems] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    cartItems,

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
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <CartContext.Provider value={cartContextValue}>
          <PageRoutes />
        </CartContext.Provider>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;
