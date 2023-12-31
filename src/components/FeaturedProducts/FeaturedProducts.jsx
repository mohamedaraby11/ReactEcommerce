import React, { useContext, useEffect, useState } from "react";
import style from "./FeaturedProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  let { addToCart } = useContext(cartContext);

  async function addProduct(productId) {
    try {
      const response = await addToCart(productId);
      console.log(response);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }
  
  async function getProducts() {
    let data = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setProducts(data.data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-2">
            <Link to={`/productsdetials/${product._id}`}>
              <div className="product px-2 py-4 cursor-pointer">
                <img className="w-100" src={product.imageCover} alt="" />
                <span className="text-main fw-bolder font-sm">
                  {product.category.name}
                </span>
                <h3 className="h6 fw-bolder">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">{product.price} EGP</span>
                  <span>
                    <i className="fas fa-star rating-color"></i>
                    {product.ratingsAverage}
                  </span>
                </div>
              </div>
            </Link>
            <button
              onClick={() => addProduct(product._id)}
              className="btn bg-main text-white w-100"
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
