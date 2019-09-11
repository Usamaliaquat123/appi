import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/svpc.png";
import ghar from "./../../../../assets/images/WhereWedo/svpc2.png";
import "./WhereWeWorkSlideOneStyles.css";
const WhereWeWorkSlideOne = () => {
  return (
    <>
      <div className="containerSlideSvpsl1">
        <div className="conbtainerSvpsl1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="workbtnSvpsl1">WHERE WE WORK</div>
                <div className="containerTextSvpsl1">
                  <div className="nonSelectSvpsl1">
                    <a href="/pvpc" style={{ textDecoration: "none" }}>
                      PEARL VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="nonSelectSvpsl1">
                    <a href="/bvpc" style={{ textDecoration: "none" }}>
                      BANJOSA VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="containerDescSlSvpsl1">
                    SOAN VALLEY PUBLIC SCHOOL
                  </div>
                  <div className="nonSelectSvpsl1">
                    <a href="/jacte" style={{ textDecoration: "none" }}>
                      JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstSlideImageSvpsl1">
                  <img
                    // class='img-fluid'
                    // width={500}
                    height={300}
                    className="bachiImgSvpsl1"
                    src={bachiBachaRun}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="containerStyleSvpsl1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="slideTextLeftSvpsl1">
                <p className="slideDescLeftSvpsl1">
                  "An investment in knowledge pays the best interest"
                  <br />
                  <br />
                  <br />- Benjamin Franklin
                </p>
                <div className="slideRightImageSvpsl1">
                  <img
                    src={ghar}
                    class="img-fluid"
                    width={500}
                    height={140}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="slideRightContainerSvpsl1">
                <div className="textContaineSvpsl1r">
                  <p className="headingSlideTextSvpsl1">
                    Soan Valley Public School
                  </p>
                  <p className="DescStyleRightSvpsl1">
                    Encouraged by the phenomenal sucess of PVPS, KEF planned to
                    replicate similar schools in other parts of the country.
                    Thus, Soan Valley Public School was established in May,2005
                    at village Pakhowal about 35 km from Rawalpindi. The entire
                    funding for the school building serves as an adjuct to
                    College of Teacher Education as a Resource Center of initial
                    Teaching practices.
                    <br /> <br />
                    like PVPS, SVPS has been provided with all the modern
                    educational facilities. Its library, named after Miss Anna
                    Finn, a london school teacher has almost 10,000 books,
                    mostly donated by KEF UK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereWeWorkSlideOne;
