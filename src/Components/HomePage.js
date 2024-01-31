import React from "react";
import Type from "./Type";
import { Col} from "react-bootstrap";
import homephoto from "../Components/Images/WhatsApp Image 2024-01-30 at 6.42.24 PM.jpeg";

const HomePage = () => {
  return (
    <div>
         <Col md={5} style={{ position: 'relative',paddingBottom: 20 }}>
        <img
          src={homephoto}
          alt="home pic"
          className="img-fluid"
          style={{  maxHeight: '450px',
          position: 'absolute',
          top: 0,
          right: 0, }
        }
        />
      </Col>
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hello There ! <span role="img" aria-labelledby="wave"></span>
      </h1>

      <h1 className="heading-name">
        I'm
        <strong className="main-name"> shreyas(ಶ್ರೇಯಸ್) </strong>
      </h1>

      <div style={{ padding: 50, textAlign: "left",color:"#103ac7bb" }}>
        <Type />
      </div>
     
      
      <Col md={12} className="home-about-social">
            <h1>CONTACT ME </h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div itemscope itemtype="https://schema.org/LocalBusiness">
                Phone Number : <span itemprop="telephone"><a href="tel:+916303099433">
                +91 7022238553</a></span>
                </div>

                </Col>
      
    </div>
  );
};

export default HomePage;
