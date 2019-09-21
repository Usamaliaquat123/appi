import React, { useState } from "react";
import "./NewsEventsSlideOneStyle.css";
import facebook from "./../../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../../assets/images/Home/Icons/youtube.png";
import bachi from "./../../../assets/images/NewsandEvents/1.png";
import postImg from "./../../../assets/images/postImg.png";
class NewsEventsSlideOne extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        modalPost  : false
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
  
  
          {this.state.modalPost == false && (
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
                    <p onClick={(e) => this.setState({ modalPost : true })} className="containerLinkNEsl1">
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
      )}
    {this.state.modalPost == true  && (
    <div className="containerPostDetail">
        <div className="containerBox">
            <div className="containerPostHeading">
            <p className="headingTextPost">GROUND BREAKING CERMONY OF SECONDARY BLOCK OF BVPS</p>
            <p className="headingTextDatePost">23RD MAY, 2019</p>
            </div>
            <div className="containerSubHeading">
              <p className="containerSubHeadingText">
              Pakistan State Oil (PSO) extends support to Kashmir Education Foundation's Bajosa Valley Public School
              </p>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <p className="postDescText">The grounding breaking ceremony for the construction of the new building of Banjosa Valley Public School took place at Kashmir. Mr. Yaqoob Sattar, DMD / CFO & Chairman, PSO CSR Trust, the chief guest at the event along with other members of the PSO CSR Trust, were welcomed by Dr. Zafar Iqbal Qadir, Chairman, Kashmir Education Foundation Trust and other representatives from the foundation. </p>
                  <iframe className="widthHeightVideoYouArticle"  src="https://www.youtube.com/embed/uYZjW7kaYTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-sm-12 col-md-4">
                  <p className="postDescText">In keeping with it's objective towards ensuring provision of quality education to disadvantaged children in Pakistan, Pakistan State Oil (PSO), the country's leading oil marketing company, partnered with Kashmir Education Foundation (KEF) to lend it's support to the foundations of Banjosa Valley Public School in Kashmir through a donation of approximately Rs. 8.2 Million. According to the agreement, the PSO CSR Trust provided funds for the construction of the ground floor of the new building. <br/><br/>

Expressing his views on the occasion, Mr. Yaqoob Sattar, Chairman PSO CSR Trust, said;<br /><br />

"I am very pleased to attend the ground-breaking ceremony of the Kashmir Education Foundation's Banjosa Valley Public School's new building. PSO believes that education is a birthright of every individual in the society. <br />
<br />
PSO Joins hands with KEF, which is doing a great service in the region by providing a platform to learn and grow."
</p>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="containerPostImg">
                  <img src={postImg} />

                  </div>
                </div>
              </div>
            </div>
        </div>

    </div>
  )}
  
  
      
        </div>
      </>
    );
  }
 
};

export default NewsEventsSlideOne;












