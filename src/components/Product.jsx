import React from "react";
import "./styles/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="productPhoto" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
