import React from "react";
import "./styles/Product.css";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <img src={image} alt="productPhoto" />
      <div className="product__info">
        <Link to={id}>
          <p>{title}</p>
        </Link>
        <p className="product__price">
          <strong>Rs. </strong>
          <strong>{price}</strong>
        </p>
      </div>

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
