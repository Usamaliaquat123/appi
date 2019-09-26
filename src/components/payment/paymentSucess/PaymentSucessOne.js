import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import facebook from "./../../../assets/images/Payment/facebook.png";
import email from "./../../../assets/images/Payment/email.png";
import message from "./../../../assets/images/Payment/message.png";
import twitter from "./../../../assets/images/Payment/twitter.png";
import backgroundImage from "./../../../assets/images/Payment/paymentSucess.png"
import "./PaymentSucessOneStyles.css"
const PaymentSucessOne = () => {
  return (
    <div
    style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
    minHeight: '500'
    }}
        className='containerCard'
    >

<div class='container-fluid'>
    <div class='row'>
      <div class='col-sm-6 col-md-6'>
      <div className='donationDesc'>
        Thank You. Your donation helps support families in need and fight illiteracy.
      </div>

      </div>
      <div class='col-sm-6 col-md-6'>
        <div className='cardOfSharing'>
           <div className='row'>
             <div className="col-sm-12 col-md-6">
               <div className="quoteStyle">
                 <p>"I just donated to KEF to support education in improverished areas of society. Join me?"</p> </div>
             </div>
             <div className="col-sm-12 col-md-6">
               <a href="https://twitter.com/">
                 
             <div className='socialIconCard'>
              <img src={twitter} ></img> TWITTER
            </div>
               </a>
            <a href="https://facebook.com">
            <div className="facebookSocialIcon">
              <img className='facebookIcons' src={facebook} ></img>FACEBOOK
            </div>
            </a>
      <a href="mailto:info@kef.education">
      <div className='socialIconCard'>
              <img src={email} ></img>EMAIL
            </div>
        
      </a>
        <a href="https://web.whatsapp.com/">
        <div className='socialIconCard'>
              <img src={message} ></img>MESSAGE
            </div>
          
        </a>
             </div>
           </div>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default PaymentSucessOne
