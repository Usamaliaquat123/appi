import React, { useState } from "react";
import "./NewsEventsSlideOneStyle.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
import bachi from "./../../../assets/images/NewsandEvents/1.png";
const NewsEventsSlideOne = () => {
  return (
    <>
      <div className="containerStyleNEsl1">
        <div className="headingSocialMmediaIconsNEsl1">
          <div className="allignSocialAndHeadingNEsl1">
            {/* Heading container  */}
            <p className="latestPostTextNEsl1">LATEST POST</p>
            {/* Heading Icons */}
            <div className="containerIconsNEsl1">
              <p className="followUsTextNEsl1">FOLLOW US</p>
              <img
                className="socialIconsNEsl1"
                src={facebook}
                class="img-fluid"
              ></img>
              <img
                className="socialIconsNEsl1"
                src={youtube}
                class="img-fluid"
              ></img>
              <img
                className="socialIconsNEsl1"
                src={instagram}
                class="img-fluid"
              ></img>
              <img
                className="socialIconsNEsl1"
                src={wifi}
                class="img-fluid"
              ></img>
              <img
                className="socialIconsNEsl1"
                src={twitter}
                class="img-fluid"
              ></img>
            </div>
          </div>
        </div>

        <div className="containerContentNEsl1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="containerContentLeftNEsl1">
                  <p className="containerHeadingNEsl1">
                    GROUND BREAKING CERMONY OF SECONDARY BLOCK OF BVPS
                  </p>
                  <p className="containerDescNEsl1">
                    The grounding breaking cermony for the construction of the
                    new building of Banjosa Valley Public School took place at
                    Kashmir.Mr. Yaqoob Sattar, DMD /CFO & Chairman, PSO CSR
                    Trust
                  </p>
                  <p className="containerLinkNEsl1">
                    Continue reading this post
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="imageContainerNEsl1">
                  <img className="tharkisNEsl1" src={bachi}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEventsSlideOne;
