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
// import PageNotFound from "../container/PageNotFound";
function AppRouter() {
  return (
    <Router>
      <Route path="http://kef.education/" exact  component={props => <HomeScreen {...props} />} />
      <Route path="http://kef.education/child/" component={props => <Child {...props} />} />
      <Route path="http://kef.education/teacher/" component={props => <Teacher {...props} />} />
      {/* Where we work */}
      <Route path="http://kef.education/pvpc" exact component={props => <Pvpc {...props} />} />
      <Route path="http://kef.education/bvpc" exact component={props => <Bvpc {...props} />} />
      <Route path="http://kef.education/svpc" exact component={props => <Scpc {...props} />} />
      <Route path="http://kef.education/jacte" exact component={props => <Jacte {...props} />} />

      {/* getInvolved */}
      <Route path="http://kef.education/getInvolved" exact component={props => <GetInvolved {...props} />} />
      <Route path="http://kef.education/News&Events" exact component={props => <NewsAndEvents {...props} />} />
      <Route path="http://kef.education/contactus" exact component={props => <ContactUs {...props} />} />
      {/* payments pages */}
      <Route path="http://kef.education/donate" exact component={props => <Donate {...props} />} />
      <Route path="http://kef.education/Pay" exact component={props => <Account_info {...props} />} />
      <Route path="http://kef.education/paySucess" exact component={props => <Pay_sucess {...props} />} />
      <Route path="http://kef.education/paymentNotSucess" exact component={props => <Pay_denied {...props} />} />
    </Router>
  );
}

export default AppRouter;
