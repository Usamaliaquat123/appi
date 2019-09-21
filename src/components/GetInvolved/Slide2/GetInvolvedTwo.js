import PropTypes from "prop-types";
import React, { useState } from "react";
import "./GetInvolvedTwoStyles.css";
const GetInvolvedTwo = () => {
  return (
    <>
      <div className="slideFiveContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="headingSlideGetInv">
                <p>Learn</p>
              </div>
              <p className="slideFiveDescriptionGetInv">
                Get the facts and how we're helping.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlideGetInv">
                <p>Volunteer</p>
              </div>
              <p className="slideFiveDescriptionGetInv">
                Find out about upcomming events that need your help.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlideGetInv">
                <p>Share</p>
              </div>
              <p className="slideFiveDescriptionGetInv">
                Let your social media networks know about this important cause.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Donate</p>
              </div>
              <p className="slideFiveDescription">
                Help us raise money to make a big difference with this issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolvedTwo;
