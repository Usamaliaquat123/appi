import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../assets/images/donation.png"
import "./donationStyle.css"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Redirect } from 'react-router-dom'
 export default class Donation extends React.Component {
  // Donation box states

constructor(props){
    super(props)

    this.state = {
      isSelected10 : true,
      isSelected25 : false,
      isSelected60 : false,
      selectedBackgroundColor: '#fff',
      isSelectedMonthly : true,
      isSelectedOneTime: false,
      totalAmount: '',
      isModal : false,
      customAmount: '10',
      selectionType : 'Monthly',
      homeType : ''
    }
    // this.donateNow = this.donateNow.bind(this)
  }

  componentDidMount(){
    if(this.props.page == "Home"){
      this.setState({homeType : 'Home'})
    }
  }

  donateNow (amount,amountType) {
    console.log(amountType)
    console.log(amount)
    localStorage.setItem('amountType', amountType)
    localStorage.setItem('amount', amount)
    // console.log(this.pro)
    this.props.history.push('Pay')
    // this.props.router.push({
    //   pathname : '/Pay',
    //   state: {
    //     amountType: amountType,
    //     amount : amount
    //   }
    // })
  }
 
render(){
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
      }}
    >


      
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className={this.state.homeType == 'Home' ?  'cardContainerRed' : 'cardContainer'}>
              <div style={{ fontSize: '1.4vw', fontWeight: "bold" }}>
                {" "}
                Choose a donation amount
              </div>
              <div style={{ marginTop: 15 }}>
                <div >
                  <div
                    className={ this.state.isSelected10 ? 'selectedPaymentCardItem' :'paymentCardItem'
                    }
                  >
                     <div className="containerToggle">
                      <label className={this.state.isSelected10 ? 'selectedContainerLabel' : "containerLabel"}>
                    <div className='row'>
                
                      <div className='col-12 col-sm-4 inline-display'>
                      <div>
                          <input 
                            type="radio" 
                            value="£10" 
                            checked={this.state.isSelected10}
                            name="radio"
                            onChange={() => this.setState({
                              isSelected10 : true,
                                isSelected25 : false,
                                totalAmount: '10',
                                isSelected60 : false
                            })}
                          />
                          <span class="checkmark"></span>
                        </div>
                        <span className="paymentAmountselector">£10</span>
                      </div>
                      <div className='col-12 col-sm-8 '>
                        <div className="containerDescSelectors">

                        <span className="descContainerSelectors">    Make a difference by subsidising<br /> the education of a
                          child
                          </span>
                        </div>
                     
                      </div>
                    </div>
                  </label>
            
                    </div>
                  </div>
                  <div
                    className={this.state.isSelected25 ? 'selectedPaymentCardItem' : 'paymentCardItem'
                    }
                  >
                     <div className="containerToggle">
                      <label className={this.state.isSelected25 ? 'selectedContainerLabel' :  "containerLabel"}>
                    <div className='row'>
            
                    <div className='col-12 col-sm-4  inline-display'>
                      <div>
                          <input 
                            type="radio" 
                            value="£25" 
                            checked={this.state.isSelected25}
                            name="radio"
                            onChange={() => this.setState({
                              isSelected10 : false,
                              totalAmount: '25',
                                isSelected25 : true,
                                isSelected60 : false
                            })}
                          />
                          <span class="checkmark"></span>
                        </div>
                        <span className="paymentAmountselector">£25</span>
                      </div>
                      <div className='col-12 col-sm-8 '>
                      <div className="containerDescSelectors">
                        <span className="descContainerSelectors">Sponsor the education for a child <br /> for disadvantaged families in <br />rural areas.</span>
                     </div>
                      </div>
                    </div>
                      </label>
            
                    </div>
                  </div>

                  <div
                    className={this.state.isSelected60 ? 'selectedPaymentCardItem' : 'paymentCardItem'
                    }
                  >
                    <div className="containerToggle">
                      <label className={this.state.isSelected60 ? 'selectedContainerLabel' :"containerLabel"}>
                    <div className='row'>
                    <div className='col-12 col-sm-4 inline-display'>
                      <div>
                          <input 
                            type="radio" 
                            value="£60" 
                            checked={this.state.isSelected60}
                            name="radio"
                            onChange={() => this.setState({
                              isSelected10 : false,
                                isSelected25 : false,
                                totalAmount: '60',
                                isSelected60 : true
                            })}
                          />
                          <span class="checkmark"></span>
                        </div>
                        <span className="paymentAmountselector">£60</span>
                      </div>
                      <div className='col-12 col-sm-8 '>
                      <div className="containerDescSelectors">
                        <span className="descContainerSelectors">Sponsor a female graduate <br />trainee teacher from a village<br /> school.</span>
                     </div>
                      </div>
                    </div>
                    </label>
            
                    </div>
                  </div>
                </div>
              </div>
              <div className='enterCustomDonationText' onClick={() => {
                this.setState({ isModal : true })
              }}>
                <p>Enter a custom donation amount</p>
              </div>
              <Dialog onClose={() => {
                this.setState({ isModal : false })
              }}  aria-labelledby="simple-dialog-title" open={this.state.isModal}>
                <DialogContent>
                <div className="enterYourCustomAmount">
                  <p className={'donationTextHead'}>Your Donation</p>
                  <p className={'donationAmountEu'}>Amount £</p>
                  <input type="text" onChange={(e) => this.setState({ customAmount: e.target.value  })} /> 
                  <div className="btnOfDonateNow" onClick={() => {
                    this.setState({ isModal: false, totalAmount : this.state.customAmount })
                  }}>Donate Now</div>
                </div>                  
                </DialogContent>

                </Dialog>
             
              <div className='selectdonationFrequency'>
                <p>Choose a donation frequency</p>






















                <div className='selectDonationFSelectorContainer'>
                  <div className={ this.state.isSelectedOneTime ? 'selectedOntime' : 'donationFrequencyButtonOneTime'}>
                  <label className={this.state.isSelectedOneTime ? 'selectedcontainerLabelDonationFreq' :"containerLabelDonationFreq"}>
                
                  <input type="radio"  name="radio"
                    onChange={() => {
                      this.setState({
                        isSelectedOneTime : true,
                        selectionType: 'onetime',
                        isSelectedMonthly: false
                      })
                    }}
                    ></input>
                    <span class="checkmarkDonationFreq"></span>
                    <span className='donationOneTimeText'>
                      One of donation
                    </span>
                    </label>
                  </div>
                  <div className={this.state.isSelectedMonthly ? 'selectedMonthly' : 'donationFrequencyButtonMonthly'}>
                  <label className={ this.state.isSelectedMonthly ? 'selectedcontainerLabelDonationFreq' :  "containerLabelDonationFreq"}>
                
                  <input type="radio"  name="radio"
                    onChange={() => {
                      this.setState({
                        isSelectedMonthly : true,
                        selectionType: 'Monthly',
                        isSelectedOneTime : false
                      })
                    }}
                    ></input>
                  <span class="checkmarkDonationFreq"></span>
                    <span className='donationOneTimeText'>
                      Regular Donation
                    </span>
                    </label>
                  </div>
                </div>
              </div>


















              <div className='donateNowAndCancel'>
                <div className='donateNowButton' onClick={() => {
                  this.donateNow(this.state.totalAmount, this.state.selectionType)
                }}>Donate Now</div>
                <div className='cancelBbutton'>cancel</div>
              </div>
            </div>
          </div>
          <div className="col-sm-5"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  )
}
 
}

