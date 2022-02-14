import React, { useState } from "react";
import image9 from '../assests/Group 1122.png'
import image13 from '../assests/facebook.png'
import image14 from '../assests/twitter.png'
import image15 from '../assests/linkedin1.png'
import { IoLocationOutline } from "react-icons/io5";
import { RiPhoneLine } from "react-icons/ri";
import { TiMail } from "react-icons/ti";

import "./Home.css";
import { NavLink } from "react-router-dom";
function Footer(){
    return(
        <footer>
      <div className='footerdistance'>
        <div className='logo'>
          <img src={image9} alt=""/>
        </div>
        <div className='footerdata'>
        <div className='footer1A'>
          <div className='footerinform'>
            Information
          </div>
          <div className='footername'>
            Main
          </div>
          <div className='footerspace'>
            About us
          </div>
          <div className='footerspace'>
            Our Causes
          </div>
          <div className='footerspace'>
            News & Features
          </div>
          <div className='footerspace'>
            Contact Us
          </div>
          <div className='footerspace'>
            Donate
          </div>
        </div>
        <div className='footer1B'>
          <div className='footerinform'>
            Contacts
          </div>
          <div className='cont_a'>
            <div>
              <div style={{color:"white",fontSize:"2.1rem"}}> <IoLocationOutline/></div>
            </div>
            <div className='margincont'>
              RBW Silver Jubilee Hall.13th Cross, 4th Main,Malleshwaram, Bengaluru - 560 003.Premises of Composite Girls Govt PU College
            </div>
          </div>
          <div className='cont_b'>
            <div>
            <div style={{color:"white",fontSize:"2.1rem"}}> <RiPhoneLine/></div>
            
            </div>
            <div className='margincont'>
              +919341215692
            </div>
          </div>
          <div className='cont_c'>
            <div>
            <div style={{color:"white",fontSize:"2.1rem"}}> <TiMail/></div>
            </div>
            <div className='margincont'>
              <div>sec.rotarybangalorewest</div><div>@gmail.com</div>
            </div>
          </div>
        </div>
        </div>
        <div className='social'>
          <div className='footerinform'>
            Social Media
          </div>
          <div className='foo_footer'>
            <img src={image13} alt=""/>
            <img src={image14} alt="" className='social_space'/>
            <img src={image15} alt="" className='social_space'/>
          </div>
        </div>
      </div>
      <div className='footerline'></div>
      <div className='copyright'>
        &copy; 2022 All Rights Reserved
      </div>
      </footer>
    )
}
export default Footer;