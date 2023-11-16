import React, { useContext, useEffect, useState } from "react";
import style from "./Products.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { counterContext } from "../../Context/CounterCountext";


export default function Products() {
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
      <FeaturedProducts />
    </>
  );
}
