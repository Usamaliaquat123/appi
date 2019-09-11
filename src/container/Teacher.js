import React, { Component } from "react";
import HomeSlide from "./../components/Home/HomeSlide/HomeSlide";
import HomeSlideSecond from "./../components/Home/Slide2/HomeSlideSecond";
import Header from "../components/header/Header";
import Subscribe from "../components/Subscribe/Subscribe";
import BottomNav from "../components/BottomNav/BottomNav";
import NavigatorView from "../components/NavigatorView/NavigatorView";
import TeachersSlideOne from "./../components/TeachersPage/Slide1/TeachersSlideOne";
import TeachersSlideTwo from "./../components/TeachersPage/Slide2/TeachersSlideTwo";
import TeachersSlideThree from "./../components/TeachersPage/Slide3/TeachersSlideThree";
import BasicFea from "../components/BasicFeatures/BasicFea";

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header siteSubTitle={`Education since 1996`} />
        {/* <hr /> */}
        <NavigatorView />
        <div
          style={{
            margin: `0 auto`
          }}
        >
          <TeachersSlideOne />
          <TeachersSlideTwo />
          <TeachersSlideThree />
          {/* <Donation /> */}
          <BasicFea />
          <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
          <BottomNav />

          <footer>
            <hr />
            <p style={{ textAlign: "center", fontSize: 13 }}>
              Copyright © 2010 Kashmir Education Eoundation. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Teacher;
