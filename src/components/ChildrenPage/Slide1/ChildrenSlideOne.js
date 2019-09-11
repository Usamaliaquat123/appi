import React, { useState } from "react";
import bachi from "./../../../assets/images/Home/ChildrenTab/bachi.png";
import "./ChildrenSlideOneStyles.css";
const ChildrenSlideOne = () => {
  return (
    <div className="containerSLideOneCh">
      <div className='container-fluid'>
        <div className="row">
          <div className='col-sm-12 col-md-4'>
          <div className="ImageContainerCh">
        <img className="bachiImgCh" src={bachi} class="img-fluid"></img>
      </div>
          </div>
          <div className='col-sm-12 col-md-8'>
          <div className="containerTextSTyleCh">
        <div className="btnWhatweDOCh">WHAT WE DO</div>
        <p className="headingTextCh">
          Providing Modern Quality Education in Kashmir & Pakistan
        </p>
        <p className="descTextCh">
          Kashmir Education Foundation (KEF) is a charitable Educational Trust
          and is currently running three schools which provide modern quality
          education to bright children from marginalized sections of the society
        </p>
        <p className="descTextCh">
          Illeracy and sub-standard education for the rural masses is recognized
          as the root cause Pakistan's major problems. Social and sectarian
          tensions and widespread pockets of poverty can offten be directly
          traced back to outmoded and inadequate education
        </p>
        <p className="descTextCh">
          The primary aim of KEF is to make the highest quality education
          accessible to talented boys and girls from underprivileged and
          hitherto and marginalised sections of society, with special emphasis
          on female education
        </p>
      </div>
          </div>
        </div>
      </div>
   
   
    </div>
  );
};

export default ChildrenSlideOne;
