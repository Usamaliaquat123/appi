import PropTypes from "prop-types";
import React from "react";
import logoImg from "./../../assets/images/logo.png";
import search from "./../../assets/images/search.png";
import "./Header.css";
const Header = ({ siteTitle, siteSubTitle }) => (
  // <div className="headContainer">
  //   <div className="container-fluid">
  //     <div className="row">
  //       <div className="col-sm-2">
  //         <a href="/" className="logoStyle">
  //           <img src={logoImg} class="img-fluid" width={170} height={130}></img>
  //         </a>
  //       </div>
  //       <div className="col-sm-6">
  //         <p className="headerSubHeading">{siteSubTitle}</p>
  //       </div>
  //       <div className="col-sm-4">
  //         <a href="/Donate" className="donatebtn">
  //           <p>DONATE NOW</p>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  //   {/* <hr /> */}
  // </div>


  <div className="headerContainer">
    <div className="containerFluid">
        <div className="headerLogo">
          <a href="/" className="logoStyle">
            <img src={logoImg} class="img-fluid" width={160} height={130}></img>
          </a>
        </div>
        <div className="sloganText">
          <p className="headerSubHeading">{siteSubTitle}</p>
        </div>
        <div className="search">
          <img className="searchIcon" src={search}></img>
        </div>
        <div className="donateNow">
          <a href="/Donate" className="donatebtn">
            <p>DONATE NOW</p>
          </a>
        </div>
    </div>
    {/* <hr /> */}
  </div>

);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
