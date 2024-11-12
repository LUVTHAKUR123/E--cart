import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
const ProductDeatil = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  return <></>;
};
export default ProductDeatil;
