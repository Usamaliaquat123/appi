import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../assets/images/donation.png"
import "./donationStyle.css"
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
      isSelectedOneTime: false
    }
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
          <div className="col-sm-12 col-md-6">
            <div className='cardContainer'>
              <div style={{ fontSize: 15, fontWeight: "bold" }}>
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
                                isSelected60 : false
                            })}
                          />
                          <span class="checkmark"></span>
                        </div>
                        <span className="paymentAmountselector">£10</span>
                      </div>
                      <div className='col-12 col-sm-8 '>
                        <div className="containerDescSelectors">

                        <span className="descContainerSelectors">    Make a difference by subsidizing the education of a
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
                        <span className="descContainerSelectors">Make a difference by subsidizing the education of a
                          child</span>
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
                                isSelected60 : true
                            })}
                          />
                          <span class="checkmark"></span>
                        </div>
                        <span className="paymentAmountselector">£60</span>
                      </div>
                      <div className='col-12 col-sm-8 '>
                      <div className="containerDescSelectors">
                        <span className="descContainerSelectors">   Make a difference by subsidizing the education of a
                          child</span>
                     </div>
                      </div>
                    </div>
                    </label>
            
                    </div>
                  </div>
                </div>
              </div>
              <div className='enterCustomDonationText'>
                <p>Enter a custom donation amount</p>
              </div>
              <div className='selectdonationFrequency'>
                <p>Choose a donation frequency</p>

                <div className='selectDonationFSelectorContainer'>
                  <div className={ this.state.isSelectedOneTime ? 'selectedOntime' : 'donationFrequencyButtonOneTime'}>
                  <label className={this.state.isSelectedOneTime ? 'selectedcontainerLabelDonationFreq' :"containerLabelDonationFreq"}>
                
                  <input type="radio" value="£60" name="radio"
                    onChange={() => {
                      this.setState({
                        isSelectedOneTime : true,
                        isSelectedMonthly: false
                      })
                    }}
                    ></input>
                    <span class="checkmarkDonationFreq"></span>
                    <span className='donationOneTimeText'>
                      One time
                    </span>
                    </label>
                  </div>
                  <div className={this.state.isSelectedMonthly ? 'selectedMonthly' : 'donationFrequencyButtonMonthly'}>
                  <label className={ this.state.isSelectedMonthly ? 'selectedcontainerLabelDonationFreq' :  "containerLabelDonationFreq"}>
                
                  <input type="radio" value="£60" name="radio"
                    onChange={() => {
                      this.setState({
                        isSelectedMonthly : true,
                        isSelectedOneTime : false
                      })
                    }}
                    ></input>
                  <span class="checkmarkDonationFreq"></span>
                    <span className='donationOneTimeText'>
                      Monthly
                    </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='donateNowAndCancel'>
                <div className='donateNowButton'>Donate Now</div>
                <div className='cancelBbutton'>cancel</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  )
}
 
}

