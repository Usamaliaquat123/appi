import PropTypes from "prop-types";
import React, { useState } from "react";
import './GetInvolvedThreeStyles.css'
import Slide2 from "../../../assets/images/GetInv/slide2.png";
const GetInvolvedThree = () => {
  return <>
    <div style={{
        backgroundImage: `url(${Slide2})`,
          maxWidth: "100%",
          margin: 0,
          height: `100%`,
          backgroundSize: "cover",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: `auto`
    }}>

    <div className="containerMakeAnImpact">
      <p className="headingTextGetInvSlide3">Make an Impact</p>
      <p className="oneLayerTextGetInvSlide3">You have the opportunity to impact the lives of children and families surrounded </p> <p className="secondLayerTextGetInvSlide3">by poverty. It is through your generosity that we can create a powerful change.</p>
      <a href="/contactus"><div className="btnGetInvolvedbtnSlide3">CONTACT US</div></a> 
    </div>
    </div>
  </>;
};

export default GetInvolvedThree;
