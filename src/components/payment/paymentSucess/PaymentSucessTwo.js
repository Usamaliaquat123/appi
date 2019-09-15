
import PropTypes from "prop-types"
import React from "react"
// import Img from "gatsby-image"
// import "bootstrap/dist/css/bootstrap.css"
import  "./PaymenSucessTwoStyles.css"
const PaymentSucessTwo = () => {
  return (
    <div className='containerSTylepaySucess'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <p className="headingTextLeftPySucess">Thank you so much for giving. We've sent a receipt for your donation to youremail@emailaddress.com. If</p>
              <p className="headingTextLeftPySucess">you have any questions. Please dont hestiate to reachout to support@email.com</p>
            </div>
            <div className="col-sm-12 col-md-4  ">
              <div className="containerRightPpaySucessSlieSecond">

              <p className="rightHeadingPaySucess">WE CAN TAKE</p>
              <p className="rightHeadingPaySucess">A SMALL STEP TO</p>
              <p className="rightHeadingPaySucess">SAVE THE FUTURE.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentSucessTwo
