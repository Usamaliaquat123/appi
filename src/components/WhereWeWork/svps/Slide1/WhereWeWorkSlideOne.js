import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/svpc.png";
import ghar from "./../../../../assets/images/WhereWedo/svpc2.png";
import "./WhereWeWorkSlideOneStyles.css";
const WhereWeWorkSlideOne = () => {
  return (
    <>
     


























      <div className="containerSlidePvSl1">
        <div className="conbtainerPvSl1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="workbtnPvSl1">WHERE WE WORK</div>
                <div className="containerTextPvSl1">
                  <div className="nonSelectPvSl1">
                    <a href="/pvpc">

                    PEARL VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="nonSelectPvSl1">
                    <a href="/bvpc" style={{ textDecoration: "none" }}>
                      BANJOSA VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="containerDescSlPvSl1">
                      SOAN VALLEY PUBLIC SCHOOL
                  </div>
                  <div className="nonSelectPvSl1">
                    <a href="/jacte" style={{ textDecoration: "none" }}>
                      JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstSlideImagePvSl1">
                  <img
                    // class='img-fluid'
                    // width={500}
                    height={300}
                    className="bachiImgPvSl1"
                    src={bachiBachaRun}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="containerStylePvSl1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="slideTextLeftPvSl1">
                <p className="slideDescLeftPvSl1">
                "An investment in knowledge pays the best interest"
                  <br />
                  <br />
                  <br />- Benjamin Franklin
                </p>
                <div className="slideRightImagePvSl1">
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
              <div className="slideRightContainerPvSl1">
                <div className="textContainerPvSl1">
                  <p className="headingSlideTextPvSl1">
                  Soan Valley Public School
                  </p>
                  <p className="DescStyleRightPvSl1">
                  Encouraged by the phenomenal sucess of PVPS, KEF planned to
                    replicate similar schools in other parts of the country.
                    Thus, Soan Valley Public School was established in May,2005
                    at village Pakhowal about 35 km from Rawalpindi. The entire
                    funding for the school building serves as an adjuct to
                    College of Teacher Education as a Resource Center of initial
                    Teaching practices.
                    <br /> <br />
                    like PVPS, SVPS has all the modern
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
