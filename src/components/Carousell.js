import React from 'react';
import image1 from '../assests/Carousel1.png'
import Carousel from 'react-bootstrap/Carousel';
import { RiShareFill} from "react-icons/ri";
function Carousell() {
  return <div>
    <div style={{
      position: "relative"
    }}>

      <Carousel>

        <Carousel.Item >

          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={image1}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
    <span style={{
      position: "fixed",
    inset: "34.5rem 120.5rem"
    }
    }>
      <button>Hellp <span><RiShareFill /></span></button>
      
    </span>
  </div>
}

export default Carousell;
