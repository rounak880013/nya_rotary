import image1 from '../assests/image 26.png'
import image2 from '../assests/image 26 (1).png'
import image3 from '../assests/image 26 (2).png'
import image4 from '../assests/image 28.png'
import image5 from '../assests/image 28 (1).png'
import image6 from '../assests/image 28 (2).png'
import image7 from '../assests/image 27.png'
import image16 from '../assests/image 26 (3).png'
import image17 from '../assests/image 28(3).png'
import image18 from '../assests/image 28 (4).png'
import { FaLongArrowAltRight } from 'react-icons/fa';
import "./Home.css";
function Banner(){
    return(
        <div className='banner'>
      <div className='banner_Heading'>Our Areas of focus</div>
    <div className='banner_1'>
      <div class="container">
        <img src={image1} alt="Avatar" class="image"/>
        <div class="overlay">
          <div class="text">Promoting <br/>Peace</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      <div class="rty">
      <div class="container" >
        <img  src={image2} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Fighting<br/>Disease</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
    </div>
    <div className='banner_3'>
    <div class="rtya">
      <div class="container" >
        <img  src={image3} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Providing<br/>clean<br/>water</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
      <div class="rtyb">
      <div class="container" >
        <img  src={image4} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Saving Mothers<br/>& Children</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
      <div class="rtyc">
      <div class="container" >
        <img  src={image5} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Supporting<br/>education</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
    </div>
    <div className='banner_4'>
    <div className='tempacola'>
    <div class="rtyq">
      <div class="container" >
        <img  src={image16} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Providing<br/>clean<br/>water</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
      <div class="rtyw">
      <div class="container" >
        <img  src={image17} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Saving Mothers & Children</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
    </div>
      </div>
      <div class="rtye">
      <div class="container" >
        <img  src={image5} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Supporting<br/>education</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
      <div class="rtyee">
      <div class="container" >
        <img  src={image18} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
          <div class="text">Supporting<br/>education</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      </div>
    </div>
    <div className='banner_2'>
      <div class="container">
        <img src={image6} alt="Avatar" class="image"/>
        <div class="overlay">
        <div class="text">Growing<br/>Local Economies</div>
          <div class="text_1">View More<FaLongArrowAltRight/></div>
        </div>
      </div>
      <div class="rty">
      <div class="container" >
        <img  src={image7} alt="Avatar" class="image" class="imageg" />
        <div class="overlay">
        <div class="text">Protecting<br/>the environment</div>
          <div class="text_1">View More<FaLongArrowAltRight /></div>
        </div>
      </div>
      </div>
    </div>
    <div className='banner_bottom'>
      <div className='banner_bottom_button'>
      <div className='contact_us_k'>
      <button><div className='contact_us_A'>All Projects&nbsp;<FaLongArrowAltRight/></div></button>
    </div>
      </div>
    </div>
    </div>
    )
}
export default Banner;