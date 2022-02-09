import React from "react";
import './about.css';
import image1 from '../assests/about image 30.png'
import image2 from '../assests/image_about_31.png'
import image3 from '../assests/about image 32.png'
import image4 from '../assests/about image 33.png'
import image5 from '../assests/about image 34.png'
import image6 from '../assests/about image 33(1).png'
import image7 from '../assests/about image 34(1).png'
import image8 from '../assests/about image 32(1).png'
import { FaArrowRight } from 'react-icons/fa'
const App = () => {
  return (
    <>
    <div className="about_header">
      <div className="about_header_a">
          Learn more about
        <div className="about_header_a_a">
          Who we are
        </div>
      </div>
      <div className="about_header_b">
        Learn about our structure and our foundation and our strategic vision.
      </div>
    </div>
    <div className="about_a_a">
    Rotary is a global network of 1.2 million neighbours, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
    </div>
    <div className="about_a_b">
      <div className="about_a_b_a">
      WHAT WE DO
        <div className="about_a_b_c">
        Rotary members believe that we have a shared responsibility to take action on our world’s most persistent issues. Our 35,000+ clubs work together to:
        <br/>
        <br/>
        <ul>
        <li>Promote peace</li>
        <li>Fight disease</li>
        <li>Provide clean water, sanitation, and hygiene</li>
        <li>Save mothers and children</li>
        <li>Support education</li>
        <li>Grow local economies</li>
        </ul>
        </div>
      </div>
      <div className="about_a_b_b">
      OUR MISSION
        <div className="about_a_b_c">
        We provide service to others, promote integrity, and advance world understanding, goodwill, and peace through our fellowship of business, professional, and community leaders.
        </div>
      </div>
    </div>
    <div className="about_miss">
    More Topics
    </div>
    <div className="about_a_c">
      <div className="about_a_c_a">
      <div class="container">
        <img src={image1} alt="Avatar" class="image"/>
        <div class="overlay">
        <div className="overlay_a">
        <div class="about_text">Our <br/>History</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
      </div>
      <div className="about_a_c_b">
      <div class="container">
        <img src={image2} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">The <br/> Structure</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
      </div>
    </div>
    <div className="About_atatata">
    <div className="about_a_c_c">
      <div className="divider_about">
    <div className="about_a_c_c_a">
    <div class="container">
        <img src={image3} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">Our <br/>Leaders</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
    </div>
    <div className="about_a_c_c_b">
    <div class="container">
        <img src={image4} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">The <br/>Finances</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className="about_a_c_c_c">
    <div class="container">
        <img src={image5} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">Our <br/>Partners</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div className="About_atatataaaaaaaaaaaaaa">
    <div className="about_a_c_c">
      <div className="divider_about">
    <div className="about_a_c_c_a">
    <div class="container">
        <img src={image8} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">Our <br/>Leaders</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
    </div>
    <div className="about_a_c_c_b">
    <div class="container">
        <img src={image6} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">The <br/>Finances</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className="about_a_c_c_c">
    <div class="container">
        <img src={image7} alt="Avatar" class="image"/>
        <div class="overlay">
          <div className="overlay_a">
        <div class="about_text">Our <br/>Partners</div>
          <div class="text_1">View More<FaArrowRight/></div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default App;