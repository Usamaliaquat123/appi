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
     <div className="banner3">
        <div className="newsGrid">
          <div className="nGridItem">
            <img className="socialIconsNesl2" src={pstImg1}></img>
            <button className="newPostBadge">New Post</button>
            <p className="postText">
                      Tree planting initiative in Pearl Valley Public School,
                      Rawalkot.
            </p>
            <a href="#">Read this post</a>
          </div>
          <div className="nGridItem">
          <img className="socialIconsNesl2" src={pstImg2}></img>
            <button className="newPostBadge">New Post</button>
            <p className="postText">
              Banjosa Valley Public School
            </p>
            <a href="#">Read this post</a>
          </div>
          <div className="nGridItem gridEvent1">
          <p className="postText">
                      Tree planting initiative in Pearl Valley Public School,
                      Rawalkot.
            </p>
            <a href="#"> Find out more about this event</a><br></br>            
            <button className="newPostBadge eventButton">New Event</button>
          <img className="cardLlandImageNesl2" src={evntImg1}></img>
          </div>
          <div className="nGridItem gridEvent2">
          <p className="eventText">
          Donation by Acklam Grange School
            </p>
            <a href="#">Find out more about this event</a><br></br>          
            <button className="newPostBadge eventButton">2018</button>
            <img className="cardLlandImageNesl2" src={evntImg2}></img>
          </div>
          <div className="nGridItem">
          <img className="socialIconsNesl2" src={pstImg3}></img>
            <button className="newPostBadge">New Post</button>
            <p className="postText">
            KEF UK Annual Fund Raising Dinner
            </p>
            <a href="#">Read this post</a>
          </div>
          <div className="nGridItem">
          <img className="socialIconsNesl2" src={pstImg4}></img>
            <button className="newPostBadge">New Post</button>
            <p className="postText">
            KEF's students visit Aeronotical Complex, Kamra.
            </p>
            <a href="#">Read this post</a>
          </div>
        </div>
      </div> 



      {/* </div> */}
    </>
  );
};

export default NewsEventsSlideTwo;
