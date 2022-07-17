import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page';
import AdoptDonatePage from './pages/adopt-page';
import ErrorPage from './pages/error-page';


const App = () => (
  <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/adopt" element={<AdoptDonatePage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;