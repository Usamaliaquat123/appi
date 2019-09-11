import PropTypes from "prop-types";
import React, { useState } from "react";
import ghar from "./../../../assets/images/GetInv/getInv.png";
import "./GetInvolvedOneStyles.css";
const GetInvolvedOne = () => {
  return (
    <>
      <div className="containerStyleGisl1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="containerLeftGlsl1">
                <p className="title">YOUR SUPPORT IS POWERFUL</p>
                <p className="subHeadingGlsl1">
                  Become a sponser today and feel the joy of changing a child's
                  world forever.
                </p>
                <p className="descGlsl1">
                  It is our belief that such endeavors can be sustainable only
                  when society plays it's role in providing opportunity for
                  education at all, regardless of cast, creed or economic
                  background.
                  <br />
                  <br />
                  Your support empowers children, their families and communities
                  to help break the cycle of poverty, opening a new world of
                  possibilities for bright but needy children
                  <br />
                  Your contribution to KEF will help us in our mission to
                  provide subsidized modern education to bright children from
                  marginalized sections of the society
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="ImageStyleGls1">
                <img src={ghar} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolvedOne;
