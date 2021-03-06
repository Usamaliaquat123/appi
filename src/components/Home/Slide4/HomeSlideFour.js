import PropTypes from "prop-types";
import React, { useState } from "react";
import tafreeTeacher from "./../../../assets/images/Home/tafreeTeacher.png";
import "./HomeSlideFourStyles.css";
const HomeSlideFour = () => {
  return (
    <div className="containerSlide">
      <a href="/teacher" className="buttonWhatWeDo">

        <p>WHAT WE DO</p>
      </a>
      <div className="secondLayerContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="containerTextInner">
                <p className="headingText">
                  Creating sustainable work for women in rural areas of Pakistan
                  & Kashmir
                </p>
                <div className="slideDescription">
                  <p className="descriptionText">
                    KEFUK set up a Teachers Training
                    Institute in 2001. by the name of Joan Atkinson College of
                    Teacher Education for female graduates, particularly from
                    rural areas to enable them to become high quality English
                    medium primary school teachers.
                  </p>
                  <a href="/teacher" className="buttonLastBlack">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className="circleLayer4">
        <div className="imageLayer4">
          <img  className='img-fluid'src={tafreeTeacher}></img>
        </div>
      </div>

      <div className="containerSecondImage"></div>
    </div>
  );
};

export default HomeSlideFour;
