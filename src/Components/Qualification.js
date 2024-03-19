import React from "react";
import { Col } from "react-bootstrap";
import qua1 from "../Components/Images/images.jpg";
import qua2 from "../Components/Images/full-stack-developer.jpg";
import qua3 from "../Components/Images/full-stack-developer-working-on-computer-vector-39256845.jpg"


const Qualification = () => {
  return (
    <div>
      <br/>
      <h1 className="full-stack">Full Stack Software Developer</h1><br/> 
      <div>
      <Col md={5} >
        <img
          src={qua2}
          alt="home pic"
          className="img-fluid"
          
        />
      </Col>
      <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={qua1}
          alt="home pic"
          className="img-fluid"
         
        />
      </Col>

      <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={qua3}
          alt="home pic"
          className="img-fluid"
          
        />
      </Col>
      
      </div>

    </div>
  );
};

export default Qualification;
