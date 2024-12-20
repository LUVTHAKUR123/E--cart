import { Link } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({ cart, items, setCart }) => {
  // console.log(items, "dsjbfhbdshhf");
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element =", cart);
    toast.success("Item added on cart ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />

      <div className="container">
        <div className="row">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
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
                  <button className="btn btn-primary mx-3">
                    {product?.price}₹
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-success ms-5"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
