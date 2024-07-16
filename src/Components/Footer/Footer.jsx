import React from 'react'
import './Footer.css'
import { MdDeliveryDining } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

  return (

    <div className="footer" id='footer'>

      <div className="footer-container">

        <div className="footer-container-left">

          <div className="footer-logo">

              <MdDeliveryDining />

              <p> YumYum Express</p>

          </div>

          <p>Hassle-free meals for a variety of lifestyles, delivered right to your doorstep.</p>

          <div className="footer-media-icons">

              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />

          </div>

        </div>
        <div className="footer-container-center">

          <h2>COMPANY</h2>

          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Company Policy</li>   

        </div>
        <div className="footer-container-right">

          <h2>Get In Touch</h2>

          <li>+23-566-6577</li>
          <li>yumyum@express.com</li>

          
        </div>
      </div>

      <hr />

      <p>Copyright 2024 &copy; Yumyumexpress.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer