import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/bachiBachaRun.png";
import ghar from "./../../../../assets/images/WhereWedo/ghar.png";
import "./WhereWeWorkSlideOneStyle.css";
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
                  <div className="containerDescSlPvSl1">
                    PEARL VALLEY PUBLIC SCHOOL
                  </div>
                  <div className="nonSelectPvSl1">
                    <a href="/bvpc" style={{ textDecoration: "none" }}>
                      BANJOSA VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="nonSelectPvSl1">
                    <a href="/svpc" style={{ textDecoration: "none" }}>
                      SOAN VALLEY PUBLIC SCHOOL
                    </a>
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
                  "When a nation come devoid of arts and learning, it invites
                  poverty. And when poverty comes it brings in it's wake
                  thousands of crimes"
                  <br />
                  <br />
                  <br />- Sir Syed Ahmed Khan
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
                    Pearl Valley Public School
                  </p>
                  <p className="DescStyleRightPvSl1">
                    Pearl Valley Public School and College was the pilot project
                    of Kashmir Education Foundation. It is located at Rawalkot,
                    Azad Kashmir for which over 3 acres were donated by the
                    Trustees. The school started functioning on August 14, 1996
                    and currently has classes up to 12th grade.
                    <br /> <br />
                    In line with KEF's policy, new intake is limited to class
                    Prep only. It is non residential day school were children
                    from underpriviledged areas of Rawalkot and surrounding
                    Villages (covering an area of 200 square kilometers with a
                    population of over 100,000 people) are admitted on merit
                    basis, with girls comprising 50% of the total number.
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
