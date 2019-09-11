import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewsEventsSlideTwoStyle.css";
// importing Posts
import pstImg1 from "./../../../assets/images/NewsandEvents/01.png";
import pstImg2 from "./../../../assets/images/NewsandEvents/02.png";
import evntImg1 from "./../../../assets/images/NewsandEvents/03.png";
import evntImg2 from "./../../../assets/images/NewsandEvents/04.png";
import pstImg3 from "./../../../assets/images/NewsandEvents/05.png";
import pstImg4 from "./../../../assets/images/NewsandEvents/06.png";
const NewsEventsSlideTwo = () => {
  return (
    <>
      <div className="containerViewNesl2">
        <div className="oneRowConatinerNesl2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                {/* /////////////////////////////// */}
                <div className="postOneNesl2">
                  {/* todo Image section */}
                  <div className="btnStyleNesl2">NEWS POST</div>
                  <img className="socialIconsNesl2" src={pstImg1}></img>
                  <div className="containerCardTextNesl2">
                    <p className="titleNewsNesl2">
                      Tree planting initiative in Pearl Valley Public School,
                      Rawalkot.
                    </p>
                    <p className="linkNewsNesl2">Read this post</p>
                  </div>
                </div>
                {/* /////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* ///////////////////////// */}
                <div className="postTwoNesl2">
                  {/* todo Image section */}
                  <div className="btnStyleNesl2">NEWS POST</div>
                  <img className="socialIconsNesl2" src={pstImg2}></img>
                  <div className="containerCardTextPostTwoNesl2">
                    <p className="titleNewsNesl2">
                      Banjosa Valley Public School
                    </p>
                    <p className="linkNewspostTwoNesl2">Read this post</p>
                  </div>
                </div>
                {/* //////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-6">
                {/* /////////////////////// */}
                <div className="postThreeNesl2">
                  <div className="containerCardTextPostThreeNesl2">
                    <p className="titleNewsNesl2">
                      Tree planting initiative in Green Fields Park
                    </p>
                    <p className="linkNewsNesl2">
                      Find out more about this event
                    </p>
                  </div>
                  <div className="btnStyleSlideThreeNesl2">EVENT</div>
                  {/* todo Image section */}
                  <img className="cardLlandImageNesl2" src={evntImg1}></img>
                </div>
                {/* /////////////////////// */}
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            <br />
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {/* ///////////////////////////////// */}
                <div className="postThreeNesl2">
                  <div className="containerCardTextPostThreeNesl2">
                    <p className="titleNewsNesl2">
                      Donation by Acklam Grange School
                    </p>
                    <p className="linkNewsNesl2">
                      Find out more about this event
                    </p>
                  </div>
                  <div className="btnStyleSlideThreeNesl2">2018</div>
                  {/* todo Image section */}
                  <img className="cardLlandImageNesl2" src={evntImg2}></img>
                </div>
                {/* ///////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* //////////////////////////////// */}
                <div className="postTwoNesl2">
                  {/* todo Image section */}
                  <div className="btnStyleNesl2">NEWS POST</div>
                  <img className="socialIconsNesl2" src={pstImg3}></img>
                  <div className="containerCardTextPostTwoNesl2">
                    <p className="titleNewsNesl2">
                      KEF UK Annual Fund Raising Dinner
                    </p>
                    <p className="linkNewspostTwoSlide2">Read this post</p>
                  </div>
                </div>
                {/* ////////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* /////////////////////// */}
                <div className="postOneNesl2">
                  {/* todo Image section */}
                  <div className="btnStyleNesl2">NEWS POST</div>
                  <img className="socialIconsNesl2" src={pstImg4}></img>
                  <div className="containerCardTextNesl2">
                    <p className="titleNewsNesl2">
                      KEF's students visit Aeronotical Complex, Kamra.
                    </p>
                    <p className="linkNewsNesl2">Read this post</p>
                  </div>
                </div>
                {/* /////////////////////// */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NewsEventsSlideTwo;
