import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import dipphoto from "../Components/Images/2015-10-28_17.47.30.jpg"
import beone from "../Components/Images/DSC_0198.JPG"
import betwo from "../Components/Images/WhatsApp Image 2024-01-30 at 6.41.01 PM.jpeg"
import meone from "../Components/Images/WhatsApp Image 2024-01-30 at 7.37.39 PM (1).jpeg"
import metwo from "../Components/Images/WhatsApp Image 2024-01-30 at 7.37.39 PM.jpeg"
import methree from "../Components/Images/WhatsApp Image 2024-01-30 at 7.37.40 PM.jpeg"


const EducationPage = () => {
  const [showDiplomaPhotos, setShowDiplomaPhotos] = useState(false);
  const [showBEPhotos, setShowBEPhotos] = useState(false);
  const [showMTechPhotos, setShowMTechPhotos] = useState(false);

  const handleViewPhotosClick = (field) => {
    switch (field) {
      case 'diploma':
        setShowDiplomaPhotos(!showDiplomaPhotos);
        break;
      case 'be':
        setShowBEPhotos(!showBEPhotos);
        break;
      case 'mtech':
        setShowMTechPhotos(!showMTechPhotos);
        break;
      default:
        break;
    }
  };

  

  return (
    <div>

      <div className="education-box">
        <h3>Diploma</h3>
        {showDiplomaPhotos && (
          <div>
            <h3>Completed Diploma in Electronics and Communication (E&C)</h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
    <img
      src={dipphoto}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
    </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick('diploma')}>View Info </button><br/><br/>
        
      </div>

      <div className="education-box">
        <h3>B.E(UG)</h3>
        {showBEPhotos && (
          <div>
            <h2>With many surgical efforts and hardworks I have Successfully Completed my Bachelor of Engineering(Under Graducation) in Electronics and Communication engineering(E&C)under VTU: Visvesvaraya Technological University</h2>
            <Col md={5} style={{ paddingBottom: 20 }}>
    <img
      src={beone}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px",
    //   position: 'absolute',
    //   top: 440,
    //   width:'350px',
    //   left: 640,
     }}
    />
    </Col>
    <Col md={5} style={{ paddingBottom: 20 }}>
    <img
      src={betwo}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px",
    //   position: 'absolute',
    //   top: 440,
    //   width:'500px',
    //   right: 340,  
    }}
    />
    </Col>
    
          </div>
        )}
        <button onClick={() => handleViewPhotosClick('be')}>View Info</button> <br/><br/>
       
      </div>

      <div className="education-box">
        <h3>M.Tech(PG)</h3>
        {showMTechPhotos && (
          <div>
            <h1>Completed Masters of Technology(Post Graducation) in Electronics and Communication engineering(E&C)</h1>
            <Col md={5} style={{ paddingBottom: 20 }}>
    <img
      src={meone}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
    </Col>
    <Col md={5} style={{ paddingBottom: 20 }}>
    <img
      src={metwo}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
    </Col>
    <Col md={5} style={{ paddingBottom: 20 }}>
    <img
      src={methree}
      alt="home pic"
      className="img-fluid"
      style={{ maxHeight: "450px" }}
    />
    </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick('mtech')}>View Info</button><br/><br/>
       
        
        
      </div>
    </div>
  );
};

export default EducationPage;
