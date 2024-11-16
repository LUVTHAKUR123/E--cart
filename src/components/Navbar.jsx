import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";

const Navbar = (cart, setData) => {
  console.log(cart, "fromHeader");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    console.log(element);
    setData.setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData.setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm();
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart{" "}
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search product"
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData.setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Moblies
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterByPrice("29999")} className="items">
            {">="}29999
          </div>
          <div onClick={() => filterByPrice("49999")} className="items">
            {">="}49999
          </div>
          <div onClick={() => filterByPrice("69999")} className="items">
            {">="}69999
          </div>
          <div onClick={() => filterByPrice("89999")} className="items">
            {">="}89999
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
