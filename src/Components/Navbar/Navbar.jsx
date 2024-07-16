import React, { useContext, useState } from 'react'
import './Navbar.css'

import { CiDeliveryTruck } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom'
import { storeContext } from '../../Context/Context';


const Navbar = ({setLogin}) => {

  const [menuActive,setMenuActive] = useState("home");

  const{cartItems,getTotal} = useContext(storeContext);

  return (

    <div className="navbar">

      <Link to='/food-delivery-app'>

        <div className="logo">

          <CiDeliveryTruck />

          <p> YumYum Express</p>

        </div>

      </Link>

      <ul className="navbar-menu">

        <Link to='/food-delivery-app' className={menuActive === 'home' ? 'active' : ""} onClick={() => setMenuActive("home")}>Home</Link>
        <a href='#explore-menu' className={menuActive === 'menu' ? 'active' : ""} onClick={() => setMenuActive("menu")}>Menu</a>
        <a href='#app-download' className={menuActive === 'mobile-app' ? 'active' : ""} onClick={() => setMenuActive("mobile-app")}>Mobile-App</a>
        <a href='#footer' className={menuActive === 'contact-us' ? 'active' : ""} onClick={() => setMenuActive("contact-us")}>Contact Us</a>

      </ul>

      <div className="navbar-right">

        <IoSearch />

        <div className="navbar-cart">

         <Link to='/food-delivery-app/cart'> <MdOutlineShoppingCart /> </Link>

          {/* <div className={cartItems[1]>0 ? "cart-circle" : "no-cart-circle"}></div> */}
          <div className={getTotal() > 0 ? "cart-circle" : ""}></div>


        </div>

        <button onClick={() => setLogin(true)}> Sign In</button>


      </div>
    </div>
  )
}

export default Navbar