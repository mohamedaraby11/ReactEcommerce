import React, { useEffect, useState } from "react";
import style from "./CategorySlider.module.css";
import Slider from "react-slick";
import axios from "axios";

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    let data = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    setCategories(data.data.data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category._id}>
            <img
              height={200}
              src={category.image}
              alt=""
              className="w-100"
            />
            <h3 className="h6 pt-2">{category.name}</h3>
          </div>
        ))}
      </Slider>
    </>
  );
}
