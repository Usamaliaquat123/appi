import React, { useState } from "react";
import "./ContactUsSlideTwoStyles.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
const ContactUsSlideTwo = () => {
  return (
    <div className="backgroundHeight">
      <div className="containerCard">
        <p className="telephoneNo">Telephone: ++44(0)1277-549970</p>
        <p className="faxTelNo">Facsimile (Fax): ++44(0)1277-549970</p>
      </div>
      <div className="slideFiveContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Learn</p>
              </div>
              <p className="slideFiveDescription">
                Get the facts and how we're helping.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Volunteer</p>
              </div>
              <p className="slideFiveDescription">
                Find out about upcomming events that need your help.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="headingSlide">
                <p>Share</p>
              </div>
              <p className="slideFiveDescription">
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

        <div className="socialMediaTab">
          <div className="followUsText">FOLLOW US</div>
          <img className="socialIcons" src={facebook}></img>
          <img className="socialIcons" src={youtube} class="img-fluid"></img>
          <img className="socialIcons" src={instagram} class="img-fluid"></img>
          <img className="socialIcons" src={wifi} class="img-fluid"></img>
          <img className="socialIcons" src={twitter} class="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSlideTwo;
