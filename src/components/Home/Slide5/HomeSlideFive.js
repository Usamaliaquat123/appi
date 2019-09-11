import PropTypes from "prop-types";
import React, { useState } from "react";
import "./HomeSlideFiveStyle.css";
const HomeSlideFive = () => {
  return (
    <div className="slideFiveContainerHme">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="headingSlideHme">
              <p>Learn</p>
            </div>
            <p className="slideFiveDescriptionHme">
              Get the facts and how we're helping.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="headingSlideHme">
              <p>Volunteer</p>
            </div>
            <p className="slideFiveDescriptionHme">
              Find out about upcomming events that need your help.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="headingSlideHme">
              <p>Share</p>
            </div>
            <p className="slideFiveDescriptionHme">
              Let your social media networks know about this important cause.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="headingSlideHme">
              <p>Donate</p>
            </div>
            <p className="slideFiveDescriptionHme">
              Help us raise money to make a big difference with this issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlideFive;
