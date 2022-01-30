import './Finance.css';
import { FaArrowRight } from 'react-icons/fa';
function Finance(){
    return(
        <>
    <div className="finannnn">
    <div className="banner-container_Rrrr">
      <div className="banner-container__text">
        Our Finances
      </div>
    </div>
    </div>
    <div className="about_d_a">
    Our leaders at Rotary exemplify all of the qualities that make our members extraordinary: integrity, expertise, and a commitment to service.
<br/>
Rotary is led by a diverse international team of top executives. Whether developing Rotary policy, providing financial support, managing a global staff, or advancing Rotary’s strategic plan, each member of the team is dedicated to helping our members connect and take action to create sustainable change.
    </div>
    <div className="about_d_b">
      <div className="about_d_b_a">
      Financial structure
      </div>
      <div className="about_d_b_b">
      The Rotary Foundation is organized as a public charity operated exclusively for charitable purposes and governed by a Board of Trustees. The operations of Rotary International, a member organization, are overseen by its Board of Directors.
      </div>
    </div>
    <div className="about_d_b">
      <div className="about_d_b_a">
      Financial reports
      </div>
      <div className="about_d_b_b">
      We publish an annual report, audited financial statements, and our tax returns each year.
      </div>
    </div>
    <div className='contact_us_rt'>
      <button><div className='contact_us_A_rt'>Read More<div className="contact_us_A_a_rt"><FaArrowRight size={12}/></div></div></button>
    </div>
    </>
    );
};
export default Finance;