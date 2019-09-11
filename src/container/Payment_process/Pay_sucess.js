import React, { Component } from "react";
import Header from "../../components/header/Header";
import Subscribe from "../../components/Subscribe/Subscribe";
import BottomNav from "../../components/BottomNav/BottomNav";
import NavigatorView from "../../components/NavigatorView/NavigatorView";

class Pay_sucess extends Component {
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
          {/* <Donation /> */}
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

export default Pay_sucess;
