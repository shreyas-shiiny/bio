import React from "react";
import { Col } from "react-bootstrap";
import pdphoto from "../Components/Images/WhatsApp Image 2024-01-30 at 4.56.42 PM.jpeg";


const PersonalDetailsPage = () => {
  return (
    
    <div>
        
      <h2> Details </h2>
      <p>Name:- Shreyas B M(ಶ್ರೇಯಸ್)</p>
      <p>DOB : 09/01/1997 ( Thursday )</p>
      <p>Timing : 10:53 pm night</p>
      <p>Place of Birth : Bangalore </p>
      <p>Education : B.E, M.Tech</p>
      <p>Religion : Hindu </p>
      <p> Caste : Kurubas</p>{" "}
      <p>
        {" "}
        God : ( Male ) Kade gadde brameshwara swamy God <br /> (Female )
        Chikamma{" "}
      </p>
      <p>Kula : Alagulla </p>
      <p>Father Name : Manjunatha B</p>
      <p>Mother Name : Sandhya Rani B </p>
      <p> Younger Brother Name : Pavan </p>
      <p>Home : YELLCHENAHALLI Kanakapura Main Road </p>
      <p> Village : Bengaluru</p>
      <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={pdphoto}
          alt="home pic"
          className="img-fluid"
          style={{  maxHeight: '550px',
          position: 'absolute',
          top: 170,
          left:555,
          right: 0 }}
        />
      </Col>
    </div>
  );
};

export default PersonalDetailsPage;
