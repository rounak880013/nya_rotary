import './Structure.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../assests/about Rectangle 2570.png"
import image2 from "../assests/about Rectangle 2571.png"
import image3 from "../assests/about Rectangle 2572.png"
function Structure(){
    return(
        <>
        <div className="finannnn">
    <div className="banner-container_Rrrr">
      <div className="banner-container__text">
      Our Structure
      </div>
    </div>
    </div>
    <div className="about_d_a">
    Rotary is made up of three parts: our clubs, Rotary International, and The Rotary Foundation. Together, we work to make lasting change in our communities and around the world.
    </div>
    <div className="about_c_a">
      <div className="about_c_a_a">
        <img  src={image1} alt="Avatar"/>
        <div className="about_c_a_a_a">
          <div className="about_c_a_a_b">Rotary <br/>clubs</div>
        </div>
        <div className="about_c_a_a_c">
        Rotary and Rotaract clubs unite dedicated people to exchange ideas, build relationships, and take action.
        </div>
      </div>
      <div className="about_c_a_b">
        <img  src={image2} alt="Avatar"/>
        <div className="about_c_a_a_a">
          <div className="about_c_a_a_b">Rotary <br/>International</div>
        </div>
        <div className="about_c_a_a_c">
        Rotary International supports Rotary clubs worldwide by coordinating global programs and initiatives.
        </div>
      </div>
      <div className="about_c_a_b">
        <img  src={image3} alt="Avatar"/>
        <div className="about_c_a_a_a">
          <div className="about_c_a_a_b">The Rotary <br/>Foundation</div>
        </div>
        <div className="about_c_a_a_c">
        The Rotary Foundation helps fund our humanitarian activities, from local service projects to global initiatives.
        </div>
      </div>
    </div>
    <div className="curs_box">
    <Carousel autoPlay interval={5000} infiniteLoop>
                <div>
                <img  src={image1} alt="Avatar"/>
        <div className="about_c_a_a_a">
          <div className="about_c_a_a_b">Rotary <br/>clubs</div>
        </div>
        <div className="about_c_a_a_c">
        Rotary and Rotaract clubs unite dedicated people to exchange ideas, build relationships, and take action.
        </div>
                </div>
                <div>
                <img  src={image2} alt="Avatar"/>
        <div className="about_c_a_a_a">
          <div className="about_c_a_a_b">Rotary <br/>International</div>
        </div>
        <div className="about_c_a_a_c">
        Rotary International supports Rotary clubs worldwide by coordinating global programs and initiatives.
        </div>
                </div>
                <div>
                <img  src={image3} alt="Avatar"/>
        <div className="about_c_a_a_a">
          <div className="about_c_a_a_b">The Rotary <br/>Foundation</div>
        </div>
        <div className="about_c_a_a_c">
        The Rotary Foundation helps fund our humanitarian activities, from local service projects to global initiatives.
        </div>
                </div>
            </Carousel>
            </div>
    </>
    );
};
export default Structure;