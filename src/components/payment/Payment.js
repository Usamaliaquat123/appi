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
import Dialog from '@material-ui/core/Dialog';
import PaymentSucessTwo from "./paymentSucess/PaymentSucessTwo";
import PaymentSucessOne from "./paymentSucess/PaymentSucessOne";
import Snackbar from '@material-ui/core/Snackbar';
import donateAid from "../../assets/images/Payment/donateAid.jpg";
class _Payment extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    console.log('================');
    this.state = {
      firstName: '',
      lastName: '',
      streetAddress: '',
      cityName: '',
      emailAddress: '',
      ccnNumber: '',
      expDate: '',
      yearDate: '',
      amount: "$100",
      cvcNo: '',
      amountType: '',
      amount: '',
      loading : false,
      paySucessStep : false,
      snakOpen : false,
      errorMessage :'',
      snakOpenpaymentProcess : false
    };
  }

  componentDidMount(){
    let amount = localStorage.getItem('amount')
    let amountType = localStorage.getItem('amountType')
    this.setState({
      amount,
      amountType
    })
  }
  handleSubmit() {
    if(this.state.firstName != ''){
      if(this.state.lastName != ''){
        if(this.state.streetAddress != ''){
          if(this.state.cityName != ''){
            if(this.state.emailAddress != ''){
             
              console.log("form submit");
              console.log(this.props);
              const { emailAddress , amountType } = this.state
          
              try {
                this.props.stripe
                .createToken({
                  name: this.state.firstName,
            
                  address_line1: this.state.streetAddress,
                    address_city : this.state.cityName,
                   
                  })
                  .then(s => {
                    if(s.error){
                      this.setState({ errorMessage : 'Please check your payment credientials and try again' , snakOpen : true })
                      return null
                    }
                    this.setState({ errorMessage : 'Payment is processing' , snakOpenpaymentProcess : true })
                    this.setState({ loading : true})
                    console.log(s.token)
                    fetch("https://kefukbackend.herokuapp.com/api/donate", {
                      method: "POST",
                      headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                  },
                  body: JSON.stringify({ token: s.token, amount, email: emailAddress,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    streetAddress : this.state.streetAddress,
                    cityName : this.state.cityName,
                    giftedAid : this.state.giftedAid,
                  })
                }).then(res => {
                  console.log('***************8')
                  if(res.status == 200){
                    this.setState({ errorMessage : 'Finalizing your payment' , snakOpenpaymentProcess : true })
                    this.setState({ paySucessStep : true })
                  }else{
                    this.props.history.push('/')
                  }
                  console.log('***************8')
                }).catch(err => console.log(err));
                  });
          
                let amount = this.state.amount;
          
              } catch (error) {
                console.log(error); 
              }
            }else{
              this.setState({ errorMessage : 'Check your email' , snakOpen : true })
            }
          }else{
            this.setState({ errorMessage : 'Please enter your city name ', snakOpen : true })
          }
        }else{
          this.setState({ errorMessage : 'Please enter street Address ', snakOpen : true })
          
        }
      }else{
        this.setState({ errorMessage : 'Please enter last name', snakOpen : true })
        
      }
    }else{
      this.setState({ errorMessage : 'Please enter first name', snakOpen : true })

    }
  
  }

  render() {
    return (
      <div >
          <Snackbar
       anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}

        open={this.state.snakOpenpaymentProcess}
        onClose={() => this.setState({ snakOpen: false })}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        autoHideDuration={4000}
        message={<span id="message-id">{this.state.errorMessage}</span>}
      />
          <Snackbar
       anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}

        open={this.state.snakOpen}
        onClose={() => this.setState({ snakOpen: false })}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        autoHideDuration={2000}
        message={<span id="message-id">{this.state.errorMessage}</span>}
      />
        {this.state.paySucessStep == true && (
          <div>
              <PaymentSucessOne />
              <PaymentSucessTwo />
          </div>
        )}
        {this.state.paySucessStep == false && (
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
                                required={true}
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
                                required="true"
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
                            required="true"
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
                            required="true"
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
                            type="email"
                            width="100%"
                            required="true"
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
                        <p>CREDIT CARD NUMBER *</p>
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
                        <div class="col-sm-12 col-md-6">
                          <div className="paymentMonthHeading">
                            <p>EXPIRATION *</p>
                          </div>
                          <div className="paymentExpMonth">
                            {/* <input  width="100%" type='number'  placeholder="MM" /> */}
                            <CardExpiryElement
                              style={{
                                base: {
                                  fontSize: "18px",
                                  color: "#fff"
                                }
                              }}
                              required="true"
                            />
                          </div>
                        </div>
                        {/* Payment expiration Security code heading */}
                        <div class="col-sm-12 col-md-6">
                          <div className="securityCodeText">
                            <p>SECURITY CODE *</p>
                          </div>
                          <div className="paymentExpCVC">
                            <CardCVCElement
                              style={{
                                base: {
                                  fontSize: "18px",
                                  color: "#fff"
                                }
                              }}
                              required="true"
                            />
                            {/* <input  width="100%" type='number'  placeholder="CVC" /> */}
                          </div>
                        </div>
                      </div>
                    
                      {/*  Payment Description */}
                      <div className="paymentDesc">
                        <p>
                        Under the Government's Gift Aid scheme, 28p from every £1 you donate, can be
reclaimed for charity if the donor is a taxpayer. Please sign and date the declaration below. 
<br /><br />
<b>Gift Aid Declaration:</b> I am a UK taxpayer and have paid tax equal to or more than the amount reclaimed on this donation. Please reclaim the tax on my donations made to KEF UK and any I make in future, unless, I notify you otherwise. If I cease to be a UK taxpayer or pay less tax than the amount being reclaimed, I shall notify the charity.
                        </p>
                      </div>
                      {/* Payment Gift Aid Checkbox */}
                      <div className="row">
                        <div className="col-sm-12 col-md-4">
                              <div className="donateGiftAidImg"><img src={donateAid} /></div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                        <div className="giftAidPayment">
                        <p>
                          <input type={"checkbox"} /> I want to Gift Aid my donation
                          to KEF
                        </p>
                      </div>
                        </div>
                      </div>
                    
    
                      {/* ///////////////////////////////// */}
                      <div class="row">
                        <div class="col-sm-6 col-md-4">
                          <div className="goBackbtn">
                            <p>Go back</p>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-8">
                       
                          <div
                            onClick={() => this.handleSubmit()}
                            className="paymentProcessBtn"
                          >
                             <div className="paymentProcessBtnAmount">
                          £ {localStorage.getItem('amount')}
                          </div>
                        <div
                            onClick={() => this.handleSubmit()}
                            className="paymentProcessBtnInner"
                          >

                            Process Payment
                          </div>
                          
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
              {/* <Dialog onClose={() => {
                    this.setState({ loading : false })
                  }}  aria-labelledby="simple-dialog-title" open={this.state.loading}>
            <div class="lds-ripple"><div></div><div></div></div>
    
                  </Dialog> */}
            </form>
    
            {/* payment component */}
          </div>
        )}

      </div>
    
    );
  }
}
const CardForm = injectStripe(_Payment);

class Checkout extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="Checkout">
        <CardForm />
      </div>
    );
  }
}

// const PaymentComp = (props) => {

class PaymentApp extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    return (
      <StripeProvider apiKey="pk_test_oC0Z5L1Oy1LPEA9B3zb961Ea00gh5qy4K9">
        <Elements>
          <Checkout   />
        </Elements>
      </StripeProvider>
    );
  }
};
//   return (

//   )
// }

export default PaymentApp;
