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

      <div>
        <h3>ಶಾಯರಿ 1</h3>
        {showPoetryOne && (
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
          {showPoetryOne ? "Close " : "Read more"}
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
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </div>
        )}
        <button onClick={() => handleViewPhotosClick("poetrytwo")}>
          {showPoetryTwo ? "Close " : "Read more"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 3</h3>
        {showPoetryThree && (
          <div>
            <h3>
              ಕನಸು ಒಂದು ಮಧುರ ಗಾನ, ನಾಗುತ ಹೋದಾಗ ಮಿಸುತೀರದ ಕಾನ.
              <br />
              ಮೂಡು ಸಲ ನಗು ಹೊತ್ತ ಸಿರಿ, ಕನಸು ನಮ್ಮ ಹೃದಯದ ಚಿರ.
              <br />
              ಮುಕ್ಕಾಲು ನಗು ಹೊತ್ತ ಕೈ, ಕನಸು ನಮ್ಮ ಮನಸ್ಸನು ಸೇರುವ ಕಡೆ.
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
          {showPoetryThree ? "Close " : "Read more"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 4</h3>
        {showPoetryFour && (
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
        <button onClick={() => handleViewPhotosClick("poetryfour")}>
          {showPoetryFour ? "Close " : "Read more"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 5</h3>
        {showPoetryFive && (
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
        <button onClick={() => handleViewPhotosClick("poetryfive")}>
          {showPoetryFive ? "Close " : "Read more"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 6</h3>
        {showPoetrySix && (
          <div>
            <h3>hiiii</h3>
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
          {showPoetrySix ? "Close " : "Read more"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 7</h3>
        {showPoetrySeven && (
          <div>
            <h3>hiiii</h3>
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
          {showPoetrySeven ? "Close " : "Read more"}
        </button>
      </div>

      <div>
        <h3>ಶಾಯರಿ 8</h3>
        {showPoetryEight && (
          <div>
            <h3>hiiii</h3>
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
          {showPoetryEight ? "Close " : "Read more"}
        </button>
      </div>



      <div>
        <h3>ಶಾಯರಿ 9</h3>
        {showPoetryNine && (
          <div>
            <h3>hiiii</h3>
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
          {showPoetryNine ? "Close " : "Read more"}
        </button>
      </div>

    </div>
  );
};

export default Hobbies;
