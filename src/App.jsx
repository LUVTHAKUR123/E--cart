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
  return (
    <>
      <Router>
        <Navbar setData={setData} />
        <Routes>
          <Route path="/" element={<Product items={data} />} />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
