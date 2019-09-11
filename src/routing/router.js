import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeScreen from "./../container/HomeScreen";
import Child from "../container/Child";
import Teacher from "../container/Teacher";
import GetInvolved from "../container/GetInvolved";
import NewsAndEvents from "../container/NewsAndEvents";
import ContactUs from "../container/ContactUs";
// importing Where we do modules
import Bvpc from "../container/WhereweDo/Bvpc";
import Jacte from "../container/WhereweDo/Jacte";
import Pvpc from "../container/WhereweDo/Pvpc";
import Scpc from "../container/WhereweDo/Scpc";
// payment Pages
import Account_info from "../container/Payment_process/Account_info";
import Donate from "../container/Payment_process/Donate";
import Pay_denied from "../container/Payment_process/Pay_denied";
import Pay_sucess from "../container/Payment_process/Pay_sucess";
// Page not found
import PageNotFound from "../container/PageNotFound";
function AppRouter() {
  return (
    <Router>
      <Route path="/" exact  component={props => <HomeScreen {...props} />} />
      <Route path="/child/" component={props => <Child {...props} />} />
      <Route path="/teacher/" component={props => <Teacher {...props} />} />
      {/* Where we work */}
      <Route path="/pvpc" exact component={props => <Pvpc {...props} />} />
      <Route path="/bvpc" exact component={props => <Bvpc {...props} />} />
      <Route path="/svpc" exact component={props => <Scpc {...props} />} />
      <Route path="/jacte" exact component={props => <Jacte {...props} />} />

      {/* getInvolved */}
      <Route path="/getInvolved" exact component={props => <GetInvolved {...props} />} />
      <Route path="/News&Events" exact component={props => <NewsAndEvents {...props} />} />
      <Route path="/contactus" exact component={props => <ContactUs {...props} />} />
      {/* payments pages */}
      <Route path="/donate" exact component={props => <Donate {...props} />} />
      <Route path="/Pay" exact component={props => <Account_info {...props} />} />
      <Route path="/paySucess" exact component={props => <Pay_sucess {...props} />} />
      <Route path="/paymentNotSucess" exact component={props => <Pay_denied {...props} />} />
    </Router>
  );
}

export default AppRouter;
