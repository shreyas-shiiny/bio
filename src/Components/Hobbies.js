import React, { useState } from "react";
import { Col } from "react-bootstrap";
import pot1 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.19.28 PM.jpeg";
import pot2 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.19.27 PM.jpeg";
import pot3 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.19.27 PM (1).jpeg";
import pot4 from "../Components/Images/WhatsApp Image 2024-01-30 at 6.39.45 PM.jpeg";
import pot5 from "../Components/Images/WhatsApp Image 2024-01-30 at 7.24.48 PM.jpeg";
import pot6 from "../Components/Images/WhatsApp Image 2024-01-31 at 6.24.37 PM.jpeg";
import pot7 from "../Components/Images/WhatsApp Image 2024-01-31 at 6.24.56 PM.jpeg";
import pot8 from "../Components/Images/WhatsApp Image 2024-01-31 at 6.24.37 PM (2).jpeg";
import pot9 from "../Components/Images/WhatsApp Image 2024-01-31 at 6.30.32 PM.jpeg";


const Hobbies = () => {
  const [showPoetryOne, setShowPoetryOne] = useState(false);
  const [showPoetryTwo, setShowPoetryTwo] = useState(false);
  const [showPoetryThree, setShowPoetryThree] = useState(false);
  const [showPoetryFour, setShowPoetryFour] = useState(false);
  const [showPoetryFive, setShowPoetryFive] = useState(false);
  const [showPoetrySix, setShowPoetrySix] = useState(false);
  const [showPoetrySeven, setShowPoetrySeven] = useState(false);
  const [showPoetryEight, setShowPoetryEight] = useState(false);
  const [showPoetryNine, setShowPoetryNine] = useState(false);


  const handleViewPhotosClick = (field) => {
    switch (field) {
      case "poetryone":
        setShowPoetryOne(!showPoetryOne);
        break;
      case "poetrytwo":
        setShowPoetryTwo(!showPoetryTwo);
        break;
      case "poetrythree":
        setShowPoetryThree(!showPoetryThree);
        break;
      case "poetryfour":
        setShowPoetryFour(!showPoetryFour);
        break;
      case "poetryfive":
        setShowPoetryFive(!showPoetryFive);
        break;
      case "poetrysix":
        setShowPoetrySix(!showPoetrySix);
        break;
      case "poetryseven":
        setShowPoetrySeven(!showPoetrySeven);
        break;
      case "poetryeight":
        setShowPoetryEight(!showPoetryEight);
        break;
        case "poetrynine":
          setShowPoetryNine(!showPoetryNine);
          break;
      default:
    }
  };

  return (
    <div>
      <h1>I have a hidden talent for writing ಕನ್ನಡ ಶಾಯರಿ</h1>
<h1> please wait ಶಾಯರಿ 1,6,7,8 will updated soon  </h1>
    <h3> Thank-you</h3>
      <div>
        <h3>ಶಾಯರಿ 1</h3>
        {showPoetryOne && (
          <div>
            <h3>
             no1 is always best wait is always worth
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot1}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  position: "absolute",
                  top: 230,
                  width: "auto",
                  right: 10,
                }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetryone")}>
          {showPoetryOne ? "Read-less " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 2</h3>
        {showPoetryTwo && (
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
              ಹಣ ಅಂತಸ್ತು ಇದ್ದರೆ ಜನ ಬರುತ್ತಾರೆ ಪಕ್ಕಕ್ಕೆ
              <br />
              ಆದರೆ ನಾವು ಯಾವತ್ತಿಗೂ ಗೌರವಿಸುವುದು ಸ್ನೇಹಕ್ಕೆ
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetrytwo")}>
          {showPoetryTwo ? "Read-less  " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 3</h3>
        {showPoetryThree && (
          <div>
            <h3>
              ಬರದಂತೆ ಕಾಯುವೆ ನೀರು ನಿಮ್ಮ ಕಣ್ಣಲ್ಲಿ <br />
              ಸಿಹಿಯನ್ನು ತಂದು ಇಡುವೆ ನಿಮ್ಮ ಬಾಯಲ್ಲಿ <br />
              ಇಡುವೆ ಪ್ರತಿ ತಿಂಗಳ ಸಂಬಳ ನಿಮ್ಮ ಕೈಯಲ್ಲಿ <br />
              ನಿಮ್ಮನ್ನು ನೀವು ನೋಡಬಹುದು ನನ್ನ ಹೃದಯದಲ್ಲಿ <br />
              ಹಣ ಇಲ್ಲದಿದ್ದರೂ ನನ್ನ ಖಾತೆಯಲ್ಲಿ
              <br /> ಕಾಪಾಡುವೆ ನಿನ್ನ ನಗುವನ್ನು ನಿಮ್ಮ ಮುಖದಲ್ಲಿ
              <br /> ನಮ್ಮಿಬ್ಬರ ಈ ಪಯಣ ಸಾಗುತ್ತಿರಲಿ ಜೊತೆ ಜೊತೆಯಲಿ <br />
              ನನ್ನನ್ನು ಏಕೆ ಹುಡುಕುವಿರಿ ಅಲ್ಲಿ ಇಲ್ಲಿ
              <br /> ನಾನು ಇರುವೆ ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ
            </h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot3}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetrythree")}>
          {showPoetryThree ? "Read-less  " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 4</h3>
        {showPoetryFour && (
          <div>
            <h3>
              ಕಾಯುತ್ತಿರುವರು ಸೂರ್ಯ ಚಂದ್ರ ನಕ್ಷತ್ರಗಳು <br />
              ಕೇಳಲು ನನ್ನ ಬಯಕೆಗಳು <br />
              ಎಲ್ಲಿಂದ ಶುರು ಮಾಡಬೇಕು ಗೊತ್ತಿಲ್ಲ ನನ್ನ ಆಸೆಗಳು
              <br />
              ಕಟ್ಟಬೇಕು ದೂರದ ಊರಿಗೆ ನಾನು ಹಗ್ಗಗಳು <br />
              ಸೆಳೆಯುವುದಕ್ಕೆ ನನ್ನನ್ನು ಇಷ್ಟಪಡುವ ಮನಸುಗಳು
              <br /> ನನ್ನ ಬಳಿ ಇಲ್ಲ ಯಾವುದೇ ಕೆಟ್ಟ ಚಟಗಳು
              <br /> ನನ್ನನ್ನು ಆಕರ್ಷಿಸುವುದು ಸಣ್ಣ ಸಣ್ಣ ಪ್ರೀತಿಯ ಮಾತುಗಳು
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
        <button onClick={() => handleViewPhotosClick("poetryfour")}>
          {showPoetryFour ? "Read-less  " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 5</h3>
        {showPoetryFive && (
          <div>
            <h3>
              ಏನೆಂದು ಕರೆಯಬೇಕು ಈ ನಿನ್ನ ಸ್ನೇಹಕ್ಕೆ <br />
              ನೀ ಸಿಕ್ಕ ಮೇಲೆ ತನ್ಮಯ ಈ ಜೀವಕ್ಕೆ
              <br />
              ಇರಲಿ ನಗುವು ನಿನ್ನ ಜೀವನ ಉದ್ದಕ್ಕೆ
              <br />
              ಯಾರ ದೃಷ್ಟಿನೂ ಬೀಳದಿರಲಿ ನಮ್ಮ ಗೆಳೆತನಕ್ಕೆ
              <br />
              ಕೊನೆ ಆಸೆ ಒಂದೇ ಈ ಜೀವಕ್ಕೆ
              <br />
              ನೋಡಬೇಕಂತೆ ಹೆಚ್ಚಾಗುವ ನಿನ್ನ ನಗುವಿನ ಮುಖ ದಿನದಿಂದ ದಿನಕ್ಕೆ
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
        <button onClick={() => handleViewPhotosClick("poetryfive")}>
          {showPoetryFive ? "Read-less  " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 6</h3>
        {showPoetrySix && (
          <div>
            <h3>Coming Soon..</h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot6}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetrysix")}>
          {showPoetrySix ? "Read-less  " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 7</h3>
        {showPoetrySeven && (
          <div>
            <h3>Coming Soon..</h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot7}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetryseven")}>
          {showPoetrySeven ? "Read-less  " : "Read More"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 8</h3>
        {showPoetryEight && (
          <div>
            <h3>Coming Soon..</h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot8}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetryeight")}>
          {showPoetryEight ? "Read-less  " : "Read More"}
        </button>
      </div>



      <div>
        <h3>ಶಾಯರಿ 9</h3>
        {showPoetryNine && (
          <div>
            <h3> ಸಾಧಕನಿಗೆ ಎಲ್ಲರೂ ಒಡೆಯುವರು ಚಪ್ಪಾಳೆಗಳು <br />
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
              ನೋಡುವುದಕ್ಕೆ ನಿಮ್ಮ ನಗುವಿನ ಚಿಲಿಪಿಲಿಗಳು</h3>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={pot9}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetrynine")}>
          {showPoetryNine ? "Read-less  " : "Read More"}
        </button>
      </div>

    </div>
  );
};

export default Hobbies;
