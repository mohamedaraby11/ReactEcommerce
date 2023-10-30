import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
export default function ProductDetails() {
  const {id} = useParams();

  const [productsDetails, setproductsDetails] = useState(null);

  async function getProductDetials(){
    try {
      const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setproductsDetails(data.data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProductDetials();
  })
  return <>

<h2>Product Detials</h2>


  {productsDetails?   <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <img className='w-100' src={productsDetails.imageCover} alt={productsDetails.title}/>
            </div>

            <div className='col-md-9'>
              <h2>Title : {productsDetails.title}</h2>
              <p>Description: {productsDetails.description}</p>
              <p>Quantity: {productsDetails.quantity}</p>
              <p>Price: {productsDetails.price}</p>
              <p>Rate: {productsDetails.ratingsAverage}</p>
              <button className='btn bg-main text-white w-100'>+ Add</button>

            </div>
          </div>
        </div>:null}

     
    </>
  
}
