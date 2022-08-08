import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import AdoptDonatePage from './pages/adopt-page';
import ErrorPage from './pages/error-page';
import CartPage from './pages/cart-page';
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
    <BrowserRouter>
      <CartContext.Provider value={cartContextValue}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/adopt" element={<AdoptDonatePage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
