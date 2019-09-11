import PropTypes from "prop-types";
import React, { useState } from "react";
import "./HomeSlideStyles.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import backgroundImage from "./../../../assets/images/Home/HomeSlide1.jpg";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
const HomeSlide = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   maxWidth: "100%",
      //   margin: 0,
      //   height: `100%`,
      //   backgroundSize: "cover",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   minHeight: `auto`
      // }}
      className="backgroundHeightSl1"
    >

      <div className="container-fluid headerbackgorundImage">
        <div className="mainContainerHeadingTextSl1">
          {/* <div className={HomeSlideStyle.backgroundText}> */}

          <p>
            <span className="backgroundTextSl1">
              THE SMALLEST ACT OF KINDNESS IS WORTH MORE{" "}
            </span>
            <br />
            <span className="backgroundTextSl1">THAN THE GRANDEST INTENTION</span>
            <br />
            <span className="backgroundTextSl1">- OSCAR WILDE</span>
          </p>
          <div className="actNoeBtnSl1">
            <p>ACT NOW</p>
          </div>
        </div>

        <div className="socialMediaTabSl1">
          <div className="followUsTextSl1">FOLLOW US</div>
          <img className="socialIconsSl1" src={facebook}></img>
          <img className="socialIconsSl1" src={youtube} class="img-fluid"></img>
          <img className="socialIconsSl1" src={instagram} class="img-fluid"></img>
          <img className="socialIconsSl1" src={wifi} class="img-fluid"></img>
          <img className="socialIconsSl1" src={twitter} class="img-fluid"></img>
        </div>
        <div className="textBottomTab">
          <div className="yellowIndicator"></div>
          WE ARE THE FUTURE
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
