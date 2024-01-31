import React, { useState } from "react";
import { Col } from "react-bootstrap";
import pot1 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.19.28 PM.jpeg";
import pot2 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.19.27 PM.jpeg";
import pot3 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.19.27 PM (1).jpeg";
import pot4 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.39.45 PM.jpeg";
import pot5 from "../Components/Images/WhatsApp Image 2024-01-30 at 7.24.48 PM.jpeg";


const Hobbies = () => {
  const [showPoertyOne, setShowPoertyOne] = useState(false);
  const [showPoertyTwo, setShowPoertyTwo] = useState(false);
  const [showPoertyThree, setShowPoertyThree] = useState(false);
  const [showPoertyFour, setShowPoertyFour] = useState(false);
  const [showPoertyFive, setShowPoertyFive] = useState(false);

  const handleViewPhotosClick = (field) => {
    switch (field) {
      case "poertyone":
        setShowPoertyOne(!showPoertyOne);
        break;
      case "poertytwo":
        setShowPoertyTwo(!showPoertyTwo);
        break;
      case "poertythree":
        setShowPoertyThree(!showPoertyThree);
        break;
      case "poertyfour":
        setShowPoertyFour(!showPoertyFour);
        break;
      case "poertyfive":
        setShowPoertyFive(!showPoertyFive);
        break;
      default:
    }
  };

  return (
    <div>
      <h1>I have an hidden talent of writting ಕನ್ನಡ ಶಾಯರಿ</h1>

      <div>
        <h3>ಶಾಯರಿ 1</h3>
        {showPoertyOne && (
          <div>
            <h3>
              ಸಾಧಕನಿಗೆ ಎಲ್ಲರೂ ಒಡೆಯುವರು ಚಪ್ಪಾಳೆಗಳು <br />
              ಹೇಳಬೇಕು ತುಂಬಾ ಬಯಕೆಗಳು
              <br />
              ನಿಮ್ಮನ್ನು ನೆನೆದರೆ ಬರುವುದಿಲ್ಲ ಮಾತುಗಳು <br />
              ತುಂಬಿದೆ ಹೃದಯದ ತುಂಬಾ ಆಸೆಗಳು
              <br />
              ನೋಡಿದರೂ ಯಾವುದೇ ವಸ್ತುಗಳು <br />
              ಹೇಳಲು ಶುರು ಮಾಡಿದರೆ ಬರೀ ತೊದಲುಗಳು <br />
              ನೋಡಿದರು ಯಾವುದೇ ಶಿಲ್ಪಿಗಳು <br />
              ಓದಿದರು ಸಾವಿರ ಪುಸ್ತಕಗಳು
              <br /> ಕೇಳಿದರು ನೂರಾರು ಕಥೆಗಳು
              <br />
              ಬರೆದರು ಎಷ್ಟೇ ಪುಟಗಳು
              <br /> ಎಲ್ಲಾದರಲ್ಲೂ ಬರೀ ನಿಮ್ಮದೇ ನೆನಪುಗಳು <br />
              ನೋಡುವುದಕ್ಕೆ ನಿಮ್ಮ ನಗುವಿನ ಚಿಲಿಪಿಲಿಗಳು
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={pot1}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px",
          position: 'absolute',
          top: 230,
          width:'auto',
          right: 10, }}
        />
      </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poertyone")}>
          Read more
        </button>
      </div>
      <div>
        <h3>ಶಾಯರಿ 2</h3>
        {showPoertyTwo && (
          <div>
            <h3>
              ಸಂಬಂಧ ಇರುವುದು ಕೈಗೆ ಕೈ ತಾಕುವುದಕ್ಕೆ
              <br />
              ಯಾಕೆಂದರೆ ಎಲ್ಲವೂ ಸೇರುವುದು ಆ ದೇವರ ಲೆಕ್ಕಕ್ಕೆ
              <br />
              ನೀನು ಖುಷಿಯಾಗಿರಬೇಕು ಎನ್ನುವುದೇ ನನ್ನ ಬೇಡಿಕೆ
              <br />
              ಆ ದೇವರು ಬೇಗ ಈಡೇರಿಸಲಿ ಈ ಕೋರಿಕೆ
              <br />
              ನೊಂದ ನನ್ನ ಈ ಹೃದಯಕ್ಕೆ <br />
              ಏನು ಬೇಡವಂತೆ ಕೇಳಿದೆ ನಾ ಯಾಕೆ
              <br />
              ಅದಕ್ಕೆ ಬೇಕಂತೆ ಮುಂಚೆ ನೀ ಕೊಡುತ್ತಿದ್ದ ಆರೈಕೆ
              <br />
              ಏನೆಂದು ಕರೆಯಬೇಕು ಈ ನಿನ್ನ ಸ್ನೇಹಕ್ಕೆ <br />
              ನೀ ಸಿಕ್ಕ ಮೇಲೆ ತನ್ಮಯ ಈ ಜೀವಕ್ಕೆ
              <br />
              ಇರಲಿ ನಗುವು ನಿನ್ನ ಜೀವನ ಉದ್ದಕ್ಕೆ
              <br />
              ಯಾರ ದೃಷ್ಟಿನೂ ಬೀಳದಿರಲಿ ನಮ್ಮ ಗೆಳೆತನಕ್ಕೆ
              <br />
              ಹಣ ಅಂತಸ್ತು ಇದ್ದರೆ ಜನ ಬರುತ್ತಾರೆ ಪಕ್ಕಕ್ಕೆ
              <br />
              ಆದರೆ ನಾವು ಯಾವತ್ತಿಗೂ ಗೌರವಿಸುವುದು ಸ್ನೇಹಕ್ಕೆ
              <br />
              ಕೊನೆ ಆಸೆ ಒಂದೇ ಈ ಜೀವಕ್ಕೆ
              <br />
              ನೋಡಬೇಕಂತೆ ಹೆಚ್ಚಾಗುವ ನಿನ್ನ ನಗುವಿನ ಮುಖ ದಿನದಿಂದ ದಿನಕ್ಕೆ
              <br />
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={pot2}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px",
           }}
        />
      </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poertytwo")}>
          Read more
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 3</h3>
        {showPoertyThree && (
          <div>
            <h3>
              ಕನಸು ಒಂದು ಮಧುರ ಗಾನ, ನಾಗುತ ಹೋದಾಗ ಮಿಸುತೀರದ ಕಾನ.
              <br />
              ಮೂಡು ಸಲ ನಗುವ ಸಿರಿ, ಕನಸು ನಮ್ಮ ಹೃದಯದ ಚಿರ.
              <br />
              ಮುಕ್ಕಾಲು ನಗು ಹೊತ್ತ ಕೈ, ಕನಸು ನಮ್ಮ ಮನಸ್ಸನು ಸೇರುವ ಕಡೆ.
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={pot3}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px",
            }}
        />
      </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poertythree")}>
          Read more
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 4</h3>
        {showPoertyFour && (
          <div>
            <h3>
              ಕನಸು ಒಂದು ಮೂಡುಗೂಡಿ ನಗು, ರಂಗದಲ್ಲಿ ನಡೆಯುವ ನವರಸದ ನೆನಪು।
              <br />
              ಮುಕ್ಕಾಲು ಹೊತ್ತ ಹೃದಯದಲ್ಲಿ, ಕನಸು ನಾಟುತ್ತಿದೆ ಆಶಾವನು।
              <br />
              ಬೆಳಗಾದ ಸೂರ್ಯನ ಕಿರಣದಲ್ಲಿ, ಮನಸ್ಸಿಗೆ ಹೊಸ ಆಲೋಚನೆ ತರುವ ಕನಸು।
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={pot4}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poertyfour")}>
          Read more
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 5</h3>
        {showPoertyFive && (
          <div>
            <h3>
              ಕನಸು ಕೊಡುವ ಕೆಲಸ ದಿನಗಳಲ್ಲಿ, ನಗು ಬರುವ ನಗರದ ಹಾದಿಯಲ್ಲಿ। <br />
              ಬಾಲೆಯ ಕಣ್ಣಿಗೆ ಕನಸು ಕೊಟ್ಟಿದೆ, ಅದು ಹೃದಯದಲ್ಲಿ ಹುಟ್ಟಿದೆ। <br />
              ಕನಸು ನಮ್ಮ ಭವಿಷ್ಯವನು ನೋಡುವ ದಾರಿ, ನಗುಹೃದಯವನು ತುಂಬುವ ಆಶಾವನು।
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={pot5}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poertyfive")}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default Hobbies;
