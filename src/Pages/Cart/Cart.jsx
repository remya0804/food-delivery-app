import React, { useContext } from 'react'
import './Cart.css'
import { storeContext } from '../../Context/Context'

import { IoMdRemoveCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {foodList,cartItems,removeFromCart,getTotal} = useContext(storeContext);

  const navigate = useNavigate();

  return (
    
    <div className="cart">

      <div className="cart-container">

        <div className="cart-container-info">

          <p className="cart-container-info-title">Items</p>
          <p>Title</p>
          <p className='item-price'>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>


        </div>

        <br />

        <hr />

        {

          foodList.map((item,idx) => {

            if(cartItems[item.id] > 0){

              return <div key={idx}> 
              
                      <div className="cart-container-info cart-items">

                                <img className='cart-items-img' src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p className='item-price'>${item.price}</p>
                                <p className='price-quantity'>{cartItems[item.id]} x {item.price}</p>
                                <p className='quantity'>{cartItems[item.id]}</p>
                                <p>{cartItems[item.id] * item.price}</p>
                                <IoMdRemoveCircle onClick={() => removeFromCart(item.id)} />

                      </div>

                      <hr />

                    </div>
            }
          })


        }
      </div>

      <div className="cart-bottom">      

        <div className="cart-total">

          <h2>Total</h2>

          <div className="cart-total-detaila">

            <p>Subtotal</p>
            {/* <p>${cartItems[1] >0 ? getTotal() : 0}</p> */}
            <p>${getTotal()==0 ? 0 : getTotal()}</p>

          </div>

          <hr />
          <div className="cart-total-detaila">

            <p>Delivery Charge</p>
            {/* <p>${5}</p> */}
            <p>${getTotal()==0 ? 0 :  5 }</p>

          </div>
          <hr />
          <div className="cart-total-detaila">
            
            <b>Total</b>
            {/* <b>${getTotal() + 5}</b> */}
            <b>${getTotal()==0 ? 0 : getTotal() + 5 }</b>

          </div>

          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      

        <div className="cart-promocode">

          <div>

            <p>If you have a promo code, enter it here</p>

            <div className="promocode-input">

              <input type="text" placeholder='promo code' />

              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart




