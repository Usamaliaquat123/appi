import React,{useState} from "react";
import bachi from "./../../assets/images/features/bachi.png";
import tharkiMedal from "./../../assets/images/features/tharki_medal.png";
import tharkiTeacher from "./../../assets/images/features/tharki_teacher.png";
import "./BasicFeaStyles.css";
import facebook from "./../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../assets/images/Home/Icons/youtube.png";
import { Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
export default class BasicFea extends React.Component {
  constructor(props){
    super(props)

    this.state =  {
      isVolunteer: true,
      volunteerName : '',
      volunteerAddress : '',
      volunteerEmail : '',
      volunteerMobile: '',
      volunteringOrFundRaising : '',
      errorMessage : '',
      snakOpen: false
    }
  }

  volunteerFormSubmit = async () => {
  if(this.state.volunteerName != ''){
    if(this.state.volunteerAddress != ''){
      if(this.state.volunteerMobile != ''){
        if(this.state.volunteerEmail != ''){
          if(this.state.volunteringOrFundRaising != ''){

          }else{
            this.setState({ errorMessage: 'Please select anyone Volunteer and Fundraising' })
            this.setState({snakOpen : true})
          }
        }else{
          this.setState({ errorMessage: 'Please enter your email' })
            this.setState({snakOpen : true})
        }
      }else{
        this.setState({ errorMessage: 'Please enter your Mobile number' })
        this.setState({snakOpen : true})
      }
    }else{
      this.setState({ errorMessage: 'Please enter your address' })
      this.setState({snakOpen : true})
    }
  }else{
    this.setState({ errorMessage: 'Please enter your name' })
    this.setState({snakOpen : true})
  }
  }
render(){
  return (
    <div className="containerOverlayFeatures">
      <div className="container-fluid">
        <div className="containerStyleFeatures">  
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="cardCcontainerFeatures">
                <div className="containerImageFeatures">
                  <img src={bachi} width="260" height="160"></img>
                </div>
                <p className="cardHeadingFea">Support a Child</p>
                <p className="containerDdescFea">
                  {" "}
                  You have the opportunity to impact the lives of children and
                  families surrounded by poverty. It is through your generosity
                  that we can create a powerfull change.{" "}
                </p>
                <a href="/child" className="containerButtonFea">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="cardCcontainerFeatures">
                <div className="containerImageFeatures">
                  <img src={tharkiTeacher} width="260" height="160"></img>
                </div>
                <p className="cardHeadingFea">Teacher Training</p>
                <p className="containerDdescFea">
                  {" "}
                  KEF made a concise decision to invest in establishing and
                  developing our own College of Teacvher Education to promote
                  advanced cognitive performance
                </p>
                <a href="/teacher" className="containerButtonFea">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="cardCcontainerFeatures">
                <div className="containerImageFeatures">
                  <img src={tharkiMedal} width="260" height="160"></img>
                </div>
                <p className="cardHeadingFea">Volunteer and Fundraising</p>
                <p className="containerDdescFea">
                  You can transform a child's world. Wheather it is by
                  volunteering or by participating in fund raisers.
                </p>
                <a onClick={() => this.setState({ isVolunteer : true })} className="containerButtonFea">
                  Read more 
                </a>
              </div>
            </div>

            {/* Volunteer Dialog */}
            
            <Dialog 
            maxWidth='md'
            fullWidth={true}
             onClose={() => {
                this.setState({ isVolunteer : false })
              }}  aria-labelledby="form-dialog-title" open={this.state.isVolunteer}>
                <DialogContent>



                      <div className='containerVolunteerForm'>
                        <p className='headingVolunteerForm'>Register as Volunteer</p>
                        <div className='headingFiledContainerVolunteer'>
                          <p className='headingFieldVolunteer'>Name</p>
                          <input onChange={(e) => this.setState({ volunteerName: e.target.value  })} type="text" className="inputOfNameVolunteer" />
                        </div>
                        <div className='headingFiledContainerVolunteer'>
                          <p className='headingFieldVolunteer'>Address</p>
                          <input onChange={(e) => this.setState({ volunteerAddress: e.target.value  })} type="text" className="inputOfNameVolunteer" />
                        </div>
                        <div className='headingFiledContainerVolunteer'>
                          <p className='headingFieldVolunteer'>Mobile</p>
                          <input onChange={(e) => this.setState({ volunteerMobile: e.target.value  })} type="text" className="inputOfNameVolunteer" />
                        </div>
                        <div className='headingFiledContainerVolunteer'>
                          <p className='headingFieldVolunteer'>Email</p>
                          <input onChange={(e) => this.setState({ volunteerEmail: e.target.value  })} type="text" className="inputOfNameVolunteer" />
                        </div>


                            <div className="containerFormOfSelector">
                              <p className="howYouCanHelpVounteerText">How you can help</p>
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-md-6 col-sm-12">
                                  <div className="selectorOfVolunteer">
                              <label onClick={() => this.setState({ volunteringOrFundRaising: 'Volunteer' })} class="containerCheckboxOfVounteer">Volunteer
  <input type="checkbox" />
  <span class="checkmarkOfVolunteer" checked="checked"></span>
</label>
                              </div>
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                  <div className="selectorOfFundraising">
                              <label  onClick={() => this.setState({ volunteringOrFundRaising: 'Fundraising' })} class="containerCheckboxOfVounteer">Fundraising
  <input type="checkbox"  />
  <span class="checkmarkOfVolunteer"></span>
</label>
                              </div>
                                  </div>
                                </div>
                              </div>
                             <div onClick={() => this.volunteerFormSubmit()} className="btnSubmitVolunteer">Submit</div>
                         
                            </div>
                        </div>       

                </DialogContent>

                </Dialog>
          </div>
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
        autoHideDuration={800}
        message={<span id="message-id">{this.state.errorMessage}</span>}
      />
        </div>
      </div>

      {/* <div className={basicFeature.socialMediaTab}>
        <div className={basicFeature.followUsText}>FOLLOW US</div>
        <img
          className='socialIcons'
          class='img-fluid'
          src={facebook}
        ></img>
        <img
          className='socialIcons'
          src={youtube}
          class='img-fluid'
        ></img>
        <img
          className='socialIcons'
          src={instagram}
          class='img-fluid'
        ></img>
        <img
          className='socialIcons'
          src={wifi}
          class='img-fluid'
        ></img>
        <img
          className='socialIcons'
          src={twitter}
            class='img-fluid'
        ></img>
      </div> */}

      <div className="socialMediaTabFea">
        <div className="followUsTextFea">FOLLOW US</div>
       <a href="https://facebook.com/KEF.Education"><img className="socialIconsFea" src={facebook}></img></a> 
        <a href="https://www.youtube.com/channel/UCU3X0JT0R8kt9TKp-9BSRZw"><img className="socialIconsFea" src={youtube} class="img-fluid"></img></a>
        <a href="https://www.instagram.com/kef_education/?hl=en"><img className="socialIconsFea" src={instagram} class="img-fluid"></img></a>
        <a href=""><img className="socialIconsFea" src={wifi} class="img-fluid"></img></a>
        <a href="https://twitter.com/kefuk?lang=en"><img className="socialIconsFea" src={twitter} class="img-fluid"></img></a>
      </div>
    </div>
  );
}


  
};

