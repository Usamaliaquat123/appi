import React, { Component } from "react";
import HomeSlide from "./../components/Home/HomeSlide/HomeSlide";
import HomeSlideSecond from "./../components/Home/Slide2/HomeSlideSecond";
import HomeSlideThird from "./../components/Home/Slide3/HomeSlideThird";
import HomeSlideFour from "./../components/Home/Slide4/HomeSlideFour";
import HomeSlideFive from "./../components/Home/Slide5/HomeSlideFive";
import Header from "../components/header/Header";
import Subscribe from "../components/Subscribe/Subscribe";
import BottomNav from "../components/BottomNav/BottomNav";
import NavigatorView from "../components/NavigatorView/NavigatorView";
import BasicFea from "../components/BasicFeatures/BasicFea";
import PaymentApp from "../components/payment/Payment";
import Donation from "../components/payment/donation";
class HomeScreen extends Component {
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
          <HomeSlide />
          <HomeSlideSecond />
          <HomeSlideThird />
          <HomeSlideFour />
          <HomeSlideFive />
          {/* <Donation /> */}
          {/* <PaymentApp /> */}
          <Donation />
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

export default HomeScreen;
