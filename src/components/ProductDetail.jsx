import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useEffect, useState } from "react";
import Product from "./Product ";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id === Number(id));

    // console.log(filterProduct);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    // console.log("RelatedProduct =", relatedProducts);
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);
  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="product-info">
          <h1 className="card-title">{product?.title}</h1>
          <p className="card-text">{product?.description}</p>
          <a href="#" className="btn btn-primary">
            {product?.price}₹
          </a>
          <button className="btn btn-success ms-5">Add to cart</button>
        </div>
      </div>
      <h1 className="text-center">Related Product</h1>
      <Product items={relatedProducts} />
    </>
  );
};
export default ProductDetail;
