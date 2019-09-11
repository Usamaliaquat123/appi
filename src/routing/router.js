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
      <Route path="/" exact component={HomeScreen} />
      <Route path="/child/" component={Child} />
      <Route path="/teacher/" component={Teacher} />
      {/* Where we work */}
      <Route path="/pvpc" exact component={Pvpc} />
      <Route path="/bvpc" exact component={Bvpc} />
      <Route path="/svpc" exact component={Scpc} />
      <Route path="/jacte" exact component={Jacte} />

      {/* getInvolved */}
      <Route path="/getInvolved" exact component={GetInvolved} />
      <Route path="/News&Events" exact component={NewsAndEvents} />
      <Route path="/contactus" exact component={ContactUs} />
      {/* payments pages */}
      <Route path="/donate" exact component={Donate} />
      <Route path="/Pay" exact component={Account_info} />
      <Route path="/paySucess" exact component={Pay_sucess} />
      <Route path="/paymentNotSucess" exact component={Pay_denied} />
    </Router>
  );
}

export default AppRouter;
