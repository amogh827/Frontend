import React, { useState, useEffect } from "react";

import Product from "./Product";
import "./styles/Home.css";
import axios from "./axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("");
      setProducts(req.data);
    }
    fetchData();
  }, []);
  console.log(products)
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          
          {products.length !==0 &&
          products.map((product)=>{
            return <Product
            id={product['_id']}
            title={product['name']}
            price={product['price']}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHovSbn0grvnpWSwuL2979tfj_Xy9kuR4tFQ&usqp=CAU"
            key={product['_id']}
          />
          })
          }

        </div>
      </div>
    </div>
  );
}

export default Home;
