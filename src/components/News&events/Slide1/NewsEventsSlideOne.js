import React, { useState } from "react";
import "./NewsEventsSlideOneStyle.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
import bachi from "./../../../assets/images/NewsandEvents/1.png";
class NewsEventsSlideOne extends React.Component {
    constructor(props){
      super(props)
      this.state = {

      }
    }
  render(){
    return (
      <>
        <div className="containerStyleNEsl1">
          <div className="headingSocialMmediaIconsNEsl1">
            <div className="allignSocialAndHeadingNEsl1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
          <p className="latestPostTextNEsl1">LATEST POST</p>
  
          </div>
          <div className="col-sm-12 col-md-6">
          <div className="containerIconsNEsl1">
                <p className="followUsTextNEsl1">FOLLOW US</p>
                <a href="https://facebook.com/KEF.Education" > <img
                  className="socialIconsNEsl1"
                  src={facebook}
                  class="img-fluid"
                ></img></a>
                <a href="https://www.youtube.com/channel/UCU3X0JT0R8kt9TKp-9BSRZw">
                <img
                  className="socialIconsNEsl1"
                  src={youtube}
                  class="img-fluid"
                ></img>
                  
                  </a>
               <a href="https://www.instagram.com/kef_education/?hl=en">
               <img
                  className="socialIconsNEsl1"
                  src={instagram}
                  class="img-fluid"
                ></img>
               </a>
              
               <a href="https://twitter.com/kefuk?lang=en">
  
                <img
                  className="socialIconsNEsl1"
                  src={twitter}
                  class="img-fluid"
                ></img>
               </a>
              </div>
  
  
          </div>
        </div>
      </div>
  
              {/* Heading container  */}
              {/* Heading Icons */}
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
  }
 
};

export default NewsEventsSlideOne;












