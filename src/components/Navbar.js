import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import image from "../assests/Rotary.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo1">
        <img src={image} className="image1"/>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul className="nav-item">
            <li>
              <NavLink style={{textDecoration: 'underline overline blue',color:"#5d9db7"}} to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT ROTARY</NavLink>
            </li>
            <li>
              <NavLink to="/service">OUR CAUSES</NavLink>
            </li>
            <li>
              <NavLink to="/contact">NEWS {"&"} FEATURE</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
            <li>
              <NavLink to="/contact">ROTARY FAMILY</NavLink>
            </li>
          </ul>
        </div>
      {/* Search iconW */}
      <div className="searchIcon">
      <a href="#"><BiSearch className="BiSearch" /></a>

      </div>

        {/* 3rd social media links */}
        <div className="social-media">
        <button type="button" class="btn btn-primary social-media-desktop"><span style={{fontSize:"1.4rem",fontWeight:"570"}}>DONATE <BiDonateHeart/></span></button>
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{color:"white"}} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
