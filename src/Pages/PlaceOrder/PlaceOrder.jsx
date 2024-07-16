import React, { useContext } from 'react'
import './PlaceOrder.css'
import { storeContext } from '../../Context/Context'

const PlaceOrder = () => {

  const {getTotal,cartItems}= useContext(storeContext);
  return (
    
    <form action="" className="place-order">

      <div className="po-left">

        <p className='po-left-title'>Delivery Information</p>

        <div className="input-fields">

          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />

        </div>

        <input type="email" placeholder='Email'/>

        <input type="text" placeholder='Street'/>

        <div className="input-fields">

          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />

        </div>

        <div className="input-fields">

          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />

        </div>

        <input type="text"  placeholder='Contact number'/>

      </div>

      <div className="po-right">

        <div className="cart-total">

          <h2>Total</h2>

          <div className="cart-total-detaila">

            <p>Subtotal</p>
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
            <b>${getTotal()==0 ? 0 :   getTotal() + 5 }</b>

          </div>

          <button >PROCEED TO PAYMENT</button>
          </div>


        </div>

      


    </form>
  )
}

export default PlaceOrder