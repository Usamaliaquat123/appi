import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/bvpc.png";
import ghar from "./../../../../assets/images/WhereWedo/bvpc2.png";
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
                  <div className="nonSelectPvSl1">
                    <a href="/pvpc">

                    PEARL VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="containerDescSlPvSl1">
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
                  "When a nation becomes devoid of arts and learning, it invites
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
                  Banjosa Valley Public School
                  </p>
                  <p className="DescStyleRightPvSl1">
                  In an effort to develop the potential of children from
                    underpriviledged and marginalised sections of the society,
                    Kashmir Education Foundation (KEF) has dedicated itself to
                    make quality education accessible to children.
                    <br /> <br />
                    Banjosa Valley Public School-BVPS. AJ&K commerced its
                    classes on 24th March 2009. The BVPS has been constructed
                    to take classes up to tenth grade and is equipped with all
                    the modern educational and recreational facilities. The
                    teaching faculty for BVPS was trained at our College for
                    Teacher Education.
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
