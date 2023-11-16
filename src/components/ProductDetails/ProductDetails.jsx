import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import axios from "axios";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

// Import a spinner component or create your own CSS spinner

export default function ProductDetails() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id } = useParams();

  const [productsDetails, setproductsDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getProductDetails() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`
      );
      setproductsDetails(data.data);
      setIsLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <h2>Product Details</h2>

      {isLoading ? (
        // Display the spinner while loading
        <div className="spinner d-flex justify-content-center align-content-center"><i className="fas fa-spin fa-spinner fa-3x"></i></div>
      ) : productsDetails ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Slider {...settings}>
                {productsDetails.images.map((img) => (
                  <img key={productsDetails._id} src={img} alt="" />
                ))}
              </Slider>
            </div>

            <div className="col-md-8">
              <h2>Title: {productsDetails.title}</h2>
              <p>Description: {productsDetails.description}</p>
              <p>Quantity: {productsDetails.quantity}</p>
              <p>Price: {productsDetails.price}</p>
              <p>Rate: {productsDetails.ratingsAverage}</p>
              <button className="btn bg-main text-white w-100">Add To Cart<i className="px-2 fa-solid fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
