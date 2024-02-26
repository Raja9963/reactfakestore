
import Home from "./component/Home"
import Product from "./component/Productpage"
import { Routes,Route, useParams } from "react-router-dom"
import Cart from "./component/Cart.jsx"




function App() {
  
  return  (
    <>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

    </Routes>
     
    </>
    
  )
}

export default App
