import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import RealLogo from "./Real-Logo.png";
// by taking a downloaded IMG and placing into the folder with your component you can IMPORT it by creating a name for it and then placing it into an IMG TAG  LINE5 = LINE 16//

const Logo = () => {
  return (
    <div className="ml3 mt0">
      <Tilt
        className="Tilt br3  shadow-2"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={RealLogo}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
