import PropTypes from "prop-types";
import React, { useState } from "react";
import "./ContactUsSlideOneStyles.css";

import backgroundImage from "./../../../assets/images/ContactUs/HomeSlide1.jpg";

const ContactUsSlideOne = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `auto`
      }}
      className="backgroundHeight"
    >
      <div className="containerContent">
        <div className="contactUsBox">
          <p className="ContactUsText">CONTACT US</p>
          <p className="getinTouchWithKEF">GET IN TOUCH WITH KEF</p>
        </div>
      </div>
      <div className="supportCareTeamRender">
        <p className="headingCareTeam">
          OUR SUPPORTER CARE TEAM IS READY TO HELP
        </p>
        <p className="addressCareTeam">370 Thornton Rd. Bardford BD88LQ, UK</p>
        <div className="btnEamilNow">EMAIL NOW</div>
      </div>
    </div>
  );
};

export default ContactUsSlideOne;
