import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,faUser,faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="container">
        <div className="navi">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
          <div className="image-icon">
            <Link to="/Contact">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            </Link>
            <Link to="/Signin">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className={`mobile-container ${isOpen ? "active" : ""}`}>
        <div className="mobile-navi">
          <ul className="nav-links">
            <div className="image-icon">
              <Link to="/Contact">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              </Link>
              <Link to="/Signin">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
              </Link>
            </div>
            <div className="menu-icon1" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      
     
    </>
  );
}

export default Navbar;