import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";
import NavigatorView from "../../components/NavigatorView/NavigatorView";
import WhereWeWorkSlideOne from "../../components/WhereWeWork/pvps/Slide1/WhereWeWorkSlideOne";
import WhereWeWorkSlideTwo from "../../components/WhereWeWork/pvps/Slide2/WhereWeWorkSlideTwo";
import WhereWeWorkSlideThree from "../../components/WhereWeWork/pvps/Slide3/WhereWeWorkSlideThree";
import Subscribe from "../../components/Subscribe/Subscribe";
import BottomNav from "../../components/BottomNav/BottomNav";

export class Pvpc extends Component {
  static propTypes = {};

  donateWithStripe() {
    console.log(`test`);
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
          <WhereWeWorkSlideOne />
          <WhereWeWorkSlideTwo />
          <WhereWeWorkSlideThree />
          {/* <Donation /> */}
          {/* <Donation */}

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

export default Pvpc;
