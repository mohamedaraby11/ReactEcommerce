import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner d-flex justify-content-center align-content-center">
          <i className="fas fa-spin fa-spinner fa-3x"></i>
        </div>
      ) : (
        <>
          <CategorySlider />
          <FeaturedProducts />
        </>
      )}
    </>
  );
}
