import { createContext, useContext, useEffect, useState } from "react";
import {Link, useNavigate, useParams } from "react-router-dom";




function Home(){
  const navigate = useNavigate()  
  const [products,setProducts] = useState([])
  
 
  
  
  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      if(data && data.length)setProducts(data)
      
    }
 
    getData()
  },[]);
  
 

  function handleClick(event){

    const n=event.currentTarget.id;
    // setNum(event.currentTarget.id)
    navigate(`/product/${n}`,{state:{n:n}})
    
    
  }
  

  return (
    <>
    <div class="container bg-light">
    <h1 style={{paddingLeft:"450px"}}>FAKE STORE</h1>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"><Link to='/' >Home</Link></a>
    <div class="px-4">
    <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="black" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Link>
    </div>
    
  </div>
</nav>


<div class="container text-center">
  <div class="row">
  {products.map((items)=>{
      return (
        <>
        <div  key={items.id} class="col-3 p-2 text-start border border-light-subtle">
          <div id={items.id} onClick={handleClick}>
            <img src={items.image} class="p-4 img-fluid bg-light" style={{height:"250px"}}  alt="..." />
            <h4 class="h-25 text-start fs-6 pt-4 lh-base">{items.title}</h4>
            <h4>MRP :{items.price}</h4>          
          </div>
               
        </div>
        
  
        </>
      )
    })}
    
  </div> 
  
  
</div>
</div>

{/* <>
        <pid.Provider value={num}>
          <Product /> 
        </pid.Provider>
      </> */}

    </>
  )
}

export default Home;