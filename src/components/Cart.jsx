import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container bg-dark " style={{ width: "50%" }}>
        {cart.map((product) => {
          return (
            <>
              <div className="card mb-3 m-2" style={{ width: "700px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product?.price}₹
                      </button>
                      <button className="btn btn-success ms-5">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Cart;
