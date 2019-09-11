import PropTypes from "prop-types";
import React, { useState } from "react";
import bachiBachaRun from "./../../../../assets/images/WhereWedo/bvpc.png";
import ghar from "./../../../../assets/images/WhereWedo/bvpc2.png";
import "./WhereWeWorkSlideOneStyle.css";
const WhereWeWorkSlideOne = () => {
  return (
    <>
      <div className="containerSlideWhsl1">
        <div className="conbtainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="workbtnWhsl1">WHERE WE WORK</div>
                <div className="containerTextWhsl1">
                  <div className="nonSelectWhsl1">
                    <a href="/pvpc" style={{ textDecoration: "none" }}>
                      PEARL VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="containerDescSlWhsl1">
                    BANJOSA VALLEY PUBLIC SCHOOL
                  </div>
                  <div className="nonSelectWhsl1">
                    <a href="/svpc" style={{ textDecoration: "none" }}>
                      SOAN VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className="nonSelectWhsl1">
                    <a href="/jacte" style={{ textDecoration: "none" }}>
                      JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="firstSlideImageWhsl1">
                  <img className="bachiImgWhsl1" src={bachiBachaRun}></img>
                </div>
                {/* <div className={WhereWeWorkSlideOneStyle.total}>
                <img
                  className={WhereWeWorkSlideOneStyle.smallTottal}
                  src={bachiBachaRun}
                ></img>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="containerStyleWhsl1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="slideTextLeftWhsl1">
                <p className="slideDescLeftWhsl1">
                  "Education is the most powerfull weapon you can use to change
                  the world"
                  <br />
                  <br />
                  <br />- Nelson Mandela
                </p>
                <div className="slideRightImageWhsl1">
                  <img src={ghar} class="img-fluid"></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="slideRightContainerWhsl1">
                <div className="textContainerWhsl1">
                  <p className="headingSlideTextWhsl1">
                    Banjosa Valley Public School
                  </p>
                  <p className="DescStyleRightWhsl1">
                    In an effort to develop the potential of children from
                    underpriviledged and marginalised sections of the society,
                    Kashmir Education Foundation (KEF) has dedicated itself to
                    make quality education accessible to children.
                    <br /> <br />
                    Banjosa Valley Public School-BVPS. AJ&K commerced its
                    classes on 24th Mmarch 2009. The BVPS has been constructed
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
