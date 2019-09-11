import React, { useState } from "react";
// import sampleImg from "./../../images/don.jpg"
import "./Payment.css";
import backgroundImage from "./../../assets/images/Payment/1.png";

// import {  } from "Stripe/inject";
import {
  CardCVCElement,
  StripeProvider,
  CardNumberElement,
  CardExpiryElement,
  Elements,
  CardElement,
  injectStripe,
  FormWithInjectStripe
} from "react-stripe-elements";

class _Payment extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      firstName: String,
      lastName: String,
      streetAddress: String,
      cityName: String,
      emailAddress: String,
      ccnNumber: String,
      expDate: String,
      yearDate: String,
      amount: "$100",
      cvcNo: String
    };
  }
  handleSubmit() {
    console.log("form submit");
    console.log(this.props);
    try {
      let token = this.props.stripe
        .createToken({
          name: this.state.firstName
        })
        .then(s => console.log(s));
      console.log(token);

      let amount = this.state.amount;
      fetch("http://localhost:5000/api/donate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "access-control-allow-origin": "localhost",
          "access-control-allow-credentials": "true"
        },
        body: JSON.stringify({ token, amount })
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
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
          minHeight: "100%"
        }}
        className=""
      >
        <form onSubmit={this.handleSubmit}>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div className="containerPayment">
                  <div className="heading">
                    <p>Your information</p>
                  </div>
                  <div className="yourInfoForm">
                    {/*First Name and Last Name ROw */}
                    <div class="row">
                      <div class="col-sm-6 col-md-6">
                        {/* First Name */}
                        <div className="nameContainer">
                          <label>FIRST NAME</label>
                          <input
                            onChange={e =>
                              this.setState({ firstName: e.target.value })
                            }
                            width="100%"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6">
                        {/* Last Name */}
                        <div className="nameContainer">
                          <label>LAST NAME</label>
                          <input
                            onChange={e =>
                              this.setState({ lastName: e.target.value })
                            }
                            width="100%"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Street Address */}
                    <div className="streetAddressContainer">
                      <p>STREET ADDRESS</p>
                      <input
                        onChange={e =>
                          this.setState({ streetAddress: e.target.value })
                        }
                        width="100%"
                        placeholder="Street address"
                      />
                    </div>
                    {/* City Name */}
                    <div className="cityNameContainer">
                      <p>CITY NAME</p>
                      <input
                        onChange={e =>
                          this.setState({ cityName: e.target.value })
                        }
                        width="100%"
                        placeholder="City name"
                      />
                    </div>
                    {/* Email Container */}
                    <div className="emailContainer">
                      <p>EMAIL ADDRESS</p>
                      <input
                        onChange={e =>
                          this.setState({ emailAddress: e.target.value })
                        }
                        width="100%"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  {/* Payment Information Section */}
                  <div className="yourPaymentInfo"></div>
                  {/* Payment Info Heading */}
                  <div className="headingPayment">
                    <p>Payment information</p>
                  </div>
                  {/* Payment Card Number */}
                  <div className="paymentInfoCardNo">
                    <p>CREDIT CARD NUMBER</p>
                    <CardNumberElement
                      style={{
                        base: {
                          fontSize: "18px",
                          color: "#fff"
                        }
                      }}
                    />
                    {/* <input width="100%" placeholder="Credit card number" /> */}
                    <div style={{ borderBottom: "1px solid #fff" }}></div>
                  </div>
                  {/* Payment Expiration | Month */}
                  <div class="row">
                    <div class="col-sm-6 col-md-6">
                      <div className="paymentMonthHeading">
                        <p>EXPIRATION</p>
                      </div>
                    </div>
                    {/* Payment expiration Security code heading */}
                    <div class="col-sm-6 col-md-6">
                      <div className="securityCodeText">
                        <p>SECURITY CODE</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    {/*  Payment Expiration Month */}
                    <div class="col-sm-4 col-md-4">
                      <div className="paymentExpMonth">
                        {/* <input  width="100%" type='number'  placeholder="MM" /> */}
                        <CardExpiryElement
                          style={{
                            base: {
                              fontSize: "18px",
                              color: "#fff"
                            }
                          }}
                        />
                      </div>
                    </div>
                    {/*  Payment Expiration Year */}
                    <div class="col-sm-4 col-md-4">
                      <div className="paymentExpYear">
                        <input width="100%" type="number" placeholder="YYYY" />
                      </div>
                    </div>
                    {/* Payment Expiration CVC */}
                    <div class="col-sm-4 col-md-4">
                      <div className="paymentExpCVC">
                        <CardCVCElement
                          style={{
                            base: {
                              fontSize: "18px",
                              color: "#fff"
                            }
                          }}
                        />
                        {/* <input  width="100%" type='number'  placeholder="CVC" /> */}
                      </div>
                    </div>
                  </div>
                  {/*  Payment Description */}
                  <div className="paymentDesc">
                    <p>
                      In order to Gift Aid your donation you must tick the box
                      below
                    </p>
                  </div>
                  {/* Payment Gift Aid Checkbox */}
                  <div className="giftAidPayment">
                    <p>
                      <input type={"checkbox"} /> I want to Gift Aid my donation
                      to KEF
                    </p>
                  </div>

                  {/* ///////////////////////////////// */}
                  <div class="row">
                    <div class="col-sm-6 col-md-6">
                      <div className="goBackbtn">
                        <p>Go back</p>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div
                        onClick={() => this.handleSubmit()}
                        className="paymentProcessBtn"
                      >
                        Process Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div className="containerStyleLeftHead">
                  <p>
                    GIVE HOPE TO
                    <br /> THOSE WHO <br />
                    NEED IT MOST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* payment component */}
      </div>
    );
  }
}
const CardForm = injectStripe(_Payment);

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <CardForm />
      </div>
    );
  }
}

// const PaymentComp = (props) => {

const PaymentApp = () => {
  return (
    <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">
      <Elements>
        <Checkout />
      </Elements>
    </StripeProvider>
  );
};
//   return (

//   )
// }

export default PaymentApp;
