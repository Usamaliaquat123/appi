import PropTypes from "prop-types";
import React, { useState } from "react";
import bachi from "./../../../assets/images/Home/TeachersTab/teacher.png";
import "./TeachersSlideOneStyle.css";
const TeachersSlideOne = () => {
  return (
    <div className="containerSLideOneTec">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 col-md-4'>
          <div className="ImageContainerTec">
        <img className="bachiImgTec" src={bachi} class="img-fluid"></img>
      </div>
          </div>
          <div className='col-sm-12 col-md-8'>
          <div className="containerTextSTyleTec">
        <div className="btnWhatweDOTec">WHAT WE DO</div>
        <p className="headingTextTec">
          Joan Atkinson College of Teacher PEducation for women
        </p>
        <p className="descTextTec">
          Joan Atkinson, the pioneer Principal of KEF's flagship school and the
          first Director of College of Teacher Education, returned voluntarily
          to steer the school during its formative period. With the passage of
          time, the faculty has been replaced by local teachers trained in the
          Joan Atkinson College of Teacher Education
        </p>
        <p className="descTextTec">
          An additional objective which was developed since 2001, out of sheer
          necessity was to setup a culture specific College of Teacher Education
          (CTE) for female graduates from rural areas. Presently our CTO
          programmes are focused on enabling these trainees to become providers
          of the highest standards of education and the best quality of teacher
          and learning children are entitled to.
        </p>
        <p className="descTextTec">
          We aim to utilize the established schools and Teacher Training
          Institutes as resource centers for replicating quality schools
          throughout the country. KEF also works to upgrade the skills of
          teachers from other schools in the respective areas.
        </p>
      </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default TeachersSlideOne;
