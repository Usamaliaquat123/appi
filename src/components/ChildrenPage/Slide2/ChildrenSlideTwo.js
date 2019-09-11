import React, { useState } from "react";
import backgroundImage from "./../../../assets/images/Home/ChildrenTab/backgroud_of_bachi.png";
import "./ChildrenSlideTwoStyles.css";
const ChildrenSlideTwo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: "auto",
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `500`
      }}
    >
      <div className="containerContentChsl2">
        <div className="btnOurImpactChsl2">OUR IMPACT</div>
        <div className="descChsl2">We invested in an educated tomorrow.</div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCountChsl2">500+</p>
              <p className="descContainerChsl2">
                Students have graduated from our schools
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCountChsl2">350+</p>
              <p className="descContainerChsl2">
                graduates in professions after completing higher education
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCountChsl2">11th</p>
              <p className="descContainerChsl2">
                Position secured in GPA among 1135 schools
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="HeadingCountChsl2">23</p>
              <p className="descContainerChsl2">
                Years of providing modren education to underprivileged boys and
                girls{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenSlideTwo;
