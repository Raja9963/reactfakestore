import { useContext, useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

import { useCart } from './CartContext';



function Product(){ 
  const { addToCart } = useCart();
  const {id}=useParams() 
  // const navigate = useNavigate()
  const [product,setProduct]=useState([])
  
  let data;

  useEffect(()=>{
    async function getData(){
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      data = await response.json()
      // console.log(data)
      setProduct(data)          
    }

    getData()
  },[]);
  
  
 
  


  
  return (
    <>
      <div class="card mb-3 ">
        <img src={product.image} class="w-25 card-img-top px-5" alt="..." />
        <div class="card-body ">
          <h5 class="card-title ">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <h4>Price : {product.price}</h4>
          {/* <p class="card-text">{it.rating.rate}</p> */}
          {/* <p class="card-text">{it.rating.count}</p> */}
          <button class="btn btn-success" onClick={()=> addToCart(product)} >Add to Cart</button>
        </div>
      </div>

      
    </>
  )
}

export default Product;