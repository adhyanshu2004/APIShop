import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
   <>
    <div className="total">

    <div className="contact">
      <h2>Conect with Us</h2>
        <p>Linkedin</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
    </div>

    <div className="knowus">
      <h2>Get to Know Us</h2>
      <p>About Us</p>
      <p>Blog</p>
    </div>

     <div className="feature">
      <h2>Features</h2>
      <p>Ecommerce</p>
      <p>POS</p>
      <p>Delivery</p>
     </div>

     <div className="help">
      <h2>Help</h2>
       <p>Product Details</p>
       <p>Signin</p>
       <p>ContactUs</p>
     </div>

            <div className="copyright">
            <p><span>Created By Jagjit Biswal</span>&copy; 2024, All rights reserved!</p>
             </div>

              <div className="icon1">
              <FontAwesomeIcon icon= {faLinkedinIn}/>
             
              <FontAwesomeIcon icon= {faTwitter} />
             
              <FontAwesomeIcon icon= {faGithub} />
             </div>
    </div>
   
   </>
   
  );
};

export default Footer;