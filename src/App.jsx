import Navbar from "./components/Navbar";
import Product from "./components/Product ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDeatil from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/SearchItem";
import { items } from "./components/Data";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  console.log(cart, "carttttt");
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
