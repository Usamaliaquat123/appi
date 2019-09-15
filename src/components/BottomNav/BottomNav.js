import PropTypes from "prop-types";
import React from "react";
// import Img from "gatsby-image"
import Logo from "./../../assets/images/logoUpdate.png";
// import "bootstrap/dist/css/bootstrap.css"
import "./BottomNav.css";
const BottomNav = () => {
  return (
    <div className='bottomNavContainer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-4'>
          <img
        class="img-fluid"
        className='imageBottomNav'
        src={Logo}
      ></img>
          </div>
          <div className='col-sm-12 col-md-8'>
          <div className='smallContainerBottomNav'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className='headingBottomNav'>
                CONTACT US
                <hr className='horizontalRuleNav' />
              </div>
              <div className='containerAdressBNav'>
                <span className="addresssLinks">
                370 Thornton Road, <br />
                </span>
                <span className="addresssLinks">
                Bradford, BD8 8LQ, <br />
                </span>
                <span className="addresssLinks">
                United Kingdom.<br />
                </span>
                <a href="mailto:info@kefuk.education" className="addresssLinks">info@kefuk.education</a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className='headingBottomNav'>
                LINKS
                <hr className='horizontalRuleNav' />
              </div>
              <div className='containerAdressBNav'>
                <a className="addresssLinks" href="/child">
                  What we do
                </a>
                <br />
                <a className="addresssLinks" href="/pvpc">
                  Where we work
                </a> 
                <br />
                <a className="addresssLinks" href="/getInvolved">
                  Get Involved
                </a>
                <br />
                <a className="addresssLinks" href="/News&Events">
                  Latest news
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className='headingBottomNav'>
                FOLLOW US
                <hr className='horizontalRuleNav' />
              </div>
              <div className='containerAdressBNav'>
                <a className="addresssLinks" href="https://facebook.com/KEF.Education">
                  Facebook
                </a>
                <br />
                <a className="addresssLinks" href="https://www.youtube.com/channel/UCU3X0JT0R8kt9TKp-9BSRZw">
                  Twitter
                </a>
                <br />
                <a className="addresssLinks" href="https://www.instagram.com/kef_education/?hl=en">
                  Instagram
                </a>
                <br />
                <a className="addresssLinks" href="https://twitter.com/kefuk?lang=en">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
     
   
    </div>
  );
};

export default BottomNav;
