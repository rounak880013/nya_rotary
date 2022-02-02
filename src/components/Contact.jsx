import image8 from '../assests/image 12.png'
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";
function Contact(){
    return(
        <div className='banner'>
        <div className='banner_Heading_hsjds'>Contact Us</div>
        <div className='signup_1'>
          <div className='signup_1_a'>
            <div class="text_2_a">Name</div>
            <input class="Name" type="text" name="name" placeholder=" Name"/>
            <div class="text_2">Email</div>
            <input class="Email" type="Email" name="Email" placeholder=" you@company.com"/>
            <div class="text_2">Phone number</div>
            <input class="Phone_number" type="Number" name="Email" placeholder=" Phone Number"/>
            <div class="text_2">Message</div>
            <input class="Message" type="text" name=" Message"/>
          </div>
          <div className='banner_Heading_hsjds_2'>Contact Us</div>
          <div className='signup_1_b'>
          <img src={image8} alt="" class="imagea"/>
          </div>
        </div>
        <div>
        <div className='contact_us'>
      <button><div className='contact_us_A'>Send Email<div className="contact_us_A_a"><FaArrowRight size={12}/></div></div></button>
    </div>
    </div>
      </div>
    )
}
export default Contact;