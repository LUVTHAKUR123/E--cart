import { Link } from "react-router-dom";
import { items } from "./Data";

const Product = () => {
  return (
    <div className="container">
      <div className="row">
        {items.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card h-100" alt="wwd">
              <Link
                to={`/product/${product.id}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product?.imgSrc}
                  className="card-img-top w-100"
                  alt="Product"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">{product?.description}</p>
                <a href="#" className="btn btn-primary">
                  {product?.price}₹
                </a>
                <button className="btn btn-success ms-5">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
