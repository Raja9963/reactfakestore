import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems , removeFromCart} = useCart();
  console.log(cartItems)

  return (
    <div class="container text-center">
  <div class="row">
  {cartItems.map((items)=>{
      return (
        <>
        <div  key={items.id} class="col-3 p-2 text-start border border-light-subtle">
          <div>
            <img src={items.image} class="p-4 img-fluid bg-light" style={{height:"250px"}}  alt="..." />
            <h4 class="h-25 text-start fs-6 pt-4 lh-base">{items.title}</h4>
            <h4>MRP $:{items.price}</h4>   
            <label for="cars">Total Quantity:</label>
              <select name="cars" id="cars">
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
            <button onClick={() => removeFromCart(items.id)}>Remove from Cart</button>      
          </div>
          
               
        </div>
        
  
        </>
      )
    })}
    
    
  </div> 
  
  
</div>
  );
};

export default Cart;
