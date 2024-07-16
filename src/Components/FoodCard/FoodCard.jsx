import React, { useContext, useState } from 'react'
import './FoodCard.css'

import { IoAddCircleSharp } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";

import star from '../../assets/s.png'
import { storeContext } from '../../Context/Context';

const FoodCard = ({id,name,image,description,price}) => {

  const [itemCount,setItemCount] = useState(0);
  const {cartItems,setCartItems,addToCart,removeFromCart} = useContext(storeContext);

  return (

    <div className="foodcard">

        <div className="foodcard-img">

            <img src={image} alt="" />

            {
              !cartItems[id]

              ? <IoAddCircleSharp className='add-button' onClick={() => addToCart(id)} />

              : <div className='food-count'> 

                    <IoMdRemoveCircle className='add-icon'  onClick={() => removeFromCart(id)}/>

                    <p>{cartItems[id]}</p>

                    <IoAddCircleSharp className='add-icon'  onClick={() => addToCart(id)}/>
        
                </div>
            }

        </div>

        <div className="foodcard-info">

            <div className="rating">

                <p className='food-name'>{name}</p>

                <img src={star} alt="" />
            </div>

            {/* <p className='food-description'>{description.slice(0,50)}</p> */}

            <p className="food-price">${price}</p>
        </div>


    </div>
  )
}

export default FoodCard