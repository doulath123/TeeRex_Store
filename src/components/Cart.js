import React from 'react'

function Cart() {
 
  return (
    <div className='mainCartContiner'>
      <div className='CartPage'>
       <p className='CartTitle'>Shooping Cart</p>
      <div className='CartContiner'>

          <div className='CartItem'>
          <img className='CartImg' src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"/>
         
          <div className='CartData'>
          <p className='CartName'>Peroduct Name</p>
            <p className='CartPrice'>Rs 100</p>
            
            </div>
            <div className='quantity'>
              <p className='dec'>-</p>
              <p className='qut'>0</p>
              <p className='inc'>+</p>
            </div>
            <button className='Deletebutton'>Delete</button>
          
          </div> 
          <div className='CartItem'>
          <img className='CartImg' src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"/>
         
          <div className='CartData'>
          <p className='CartName'>Peroduct Name</p>
            <p className='CartPrice'>Rs 100</p>
            
            </div>
            <div className='quantity'>
              <p className='dec'>-</p>
              <p className='qut'>0</p>
              <p className='inc'>+</p>
            </div>
            <button className='Deletebutton' >Delete</button>
          
          </div> 
          <div className='CartItem'>
          <img className='CartImg' src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"/>
         
          <div className='CartData'>
          <p className='CartName'>Peroduct Name</p>
            <p className='CartPrice'>Rs 100</p>
            
            </div>
            <div className='quantity'>
              <p className='dec'>-</p>
              <p className='qut'>0</p>
              <p className='inc'>+</p>
            </div>
            <button className='Deletebutton'>Delete</button>
          
          </div> 

          <div className='line'></div>
          
        
    </div>
    <div className='totalamount'>
      <p>Total amount</p>
      <p>Rs. 1200</p>

    </div>
      </div>
    </div>
   
  )
}

export default Cart
