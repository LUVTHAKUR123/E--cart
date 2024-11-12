import Navbar from "./components/Navbar";
import Product from "./components/Product ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDeatil from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/SearchItem";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/search/item" element={<SearchItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
