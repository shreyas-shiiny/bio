import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["ನಮಸ್ಕಾರ ನನ್ನ ಹೆಸರು ಶ್ರೇಯಸ್!!", "Hai Myself shreyas"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
