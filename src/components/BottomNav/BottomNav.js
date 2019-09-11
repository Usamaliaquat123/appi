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
                <span className="addresssLinks">contact@npo.org</span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className='headingBottomNav'>
                LINKS
                <hr className='horizontalRuleNav' />
              </div>
              <div className='containerAdressBNav'>
                <a className="addresssLinks" href="/Schools">
                  What we do
                </a>
                <br />
                <a className="addresssLinks" href="/Pvps">
                  Where we work
                </a> 
                <br />
                <a className="addresssLinks" href="/GetInvolved">
                  Get Involved
                </a>
                <br />
                <a className="addresssLinks" href="/News">
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
                <a className="addresssLinks" href="#">
                  Facebook
                </a>
                <br />
                <a className="addresssLinks" href="#">
                  Twitter
                </a>
                <br />
                <a className="addresssLinks" href="#">
                  Instagram
                </a>
                <br />
                <a className="addresssLinks" href="#">
                  Medium
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
