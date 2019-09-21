import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/jact.png";
import ghar from "./../../../../assets/images/WhereWedo/jact2.png";
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
                  <div className="containerDescSlPvSl1">
                      JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
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
                "No nation can raise to the height of glory unless your women
                  has side by side with you "
                  <br />
                  <br />
                  <br />- Muhammad Ali Jinnah
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
                  Joan Atkinson College of Teacher Education
                  </p>
                  <p className="DescStyleRightPvSl1">
                  Quality education that KEF is committed to cannot be
                    deliverd without teachers who are personally motivated, who
                    have a wide range of pedagogical skills to develop child
                    centred learning enviroments with a focus on interactive
                    teaching methodology to promote advanced cognitive
                    performance.
                    <br /> <br />
                    KEF made a conscious decision to invest in establishing and
                    developing our own College of Teacher Education in 2001, in
                    order to take the best available teachers and support them
                    towords becoming outstanding teachers using the most
                    effective research oriented continous professional
                    development techniques
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
