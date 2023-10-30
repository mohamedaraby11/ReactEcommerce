import React from 'react'
import style from './Home.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CategorySlider from '../CategorySlider/CategorySlider'
export default function Home() {
  return <>

        <CategorySlider/>
        <FeaturedProducts/>
        <h2>Home</h2>
    </>
  
}
