import PropTypes from "prop-types";
import React, { useState } from "react";
import logoImg from "./../../../assets/images/logo.png";
import homeLesson from "./../../../assets/images/Home/homeLesson.png";
import teacherLesson from "./../../../assets/images/Home/teacherLesson.png";
import eductionLesson from "./../../../assets/images/Home/eductionLesson.png";
import "./HomeSlideSecondStyles.css";
const HomeSlideSecond = () => {
  return (
    <div>
      <div className="logImg">
        <img src={logoImg} class="img-fluid"></img>
      </div>
      <div className="DescriptionSlide">
        <p>
          We are non- profit organization eduction orphaned & underpriviledged
          children at your purpose built schools in Soan Valley in Pakistan and
          Banjosa and Rawalakot in Azad Kashmir
        </p>
      </div>
      <div className="containerFeatures">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 ">
              <div className="featureAllign">
                <img
                  src={homeLesson}
                  class="img-fluid"
                ></img>
              </div>
              <p className="featureText">900+ students in 3 schools</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="featureAllign">
                <img
                  src={eductionLesson}
                  class="img-fluid"
                ></img>
              </div>
              <p className="donationPolicyText">100% donation policy</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="featureAllign">
                <img src={teacherLesson} class="img-fluid"></img>
              </div>
              <p className="teachersTrainedText">1250 teachers trained</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlideSecond;
