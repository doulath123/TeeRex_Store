import React from 'react'
import { Route } from 'react-router-dom'
import {Routes,useNavigate} from 'react-router-dom'
import Cart from './Cart'
import Product from './Product'
const Nav=() =>{
  const navigat=useNavigate();
  const product=()=>{
    navigat('/')

  }
  const cart=()=>{
    navigat('/cart')
  }
  return (
   <div className="Navbar">
    <div className="leftNav" onClick={product}>
      <h2 >TeeRex Store</h2>
      
    </div>
    
    <div className="rightNav"onClick={cart}>
      
      <div className='basketlogo'>🛒</div><span className='cart_count'>10</span>
     
      
      
    </div>
   </div>
  )
}

function AllRoutes() {
  return (
      <>
      <Nav className="Navbar"/>
    <Routes>
    <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Product/>}/>
        
    </Routes>
    </>
  )
}

export default AllRoutes;
