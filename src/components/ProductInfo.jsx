import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from"./axios";

function ProductInfo() {
  const [product,setProduct] = useState({});
  const { productInfo } = useParams();
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`product/${productInfo}`);
      setProduct(req.data);
    }
    fetchData();
  }, []);
  console.log(`${productInfo}`);
  console.log(typeof productInfo);
  console.log(product);
  return (<div>
    {Object.keys(product).length !== 0 &&
    <div className="product">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHovSbn0grvnpWSwuL2979tfj_Xy9kuR4tFQ&usqp=CAU" alt="productPhoto" />
  <div className="product__info">
      <p>{product['name']}</p>
    <p className="product__price">
      <strong>Rs. </strong>
      <strong>{product['price']}</strong>
    </p>
  </div>

  <button>Add to Basket</button>
  </div>}
</div>);
}

export default ProductInfo;
