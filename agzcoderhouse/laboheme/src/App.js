import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Store from "./pages/store/Store";
import ProductDetail from "./pages/store/ProductDetail";
import OrderSumary from "./pages/store/OrderSumary";
import PageNotFound from "./pages/errors/PageNotFound";
import { ProductDataProvider } from "./context/ProductDataContext";
import { CartProvider } from "./context/CartContext";
//mport Footer from './components/footer/Footer';

function App() {
  return (

      <ProductDataProvider>
        <CartProvider>
          <BrowserRouter>
            <header>
              <Navbar />
            </header>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faqs" element={<Faqs />} />
                <Route path="store">
                  <Route index element={<Store />} />
                  <Route path="products/:ident" element={<ProductDetail />} />
                </Route>
                <Route path="ordersumary" element={<OrderSumary />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductDataProvider>

  );
}

export default App;
