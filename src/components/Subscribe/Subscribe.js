import PropTypes from "prop-types"
import React from "react"
// import Img from "gatsby-image"
// import "bootstrap/dist/css/bootstrap.css"
import  "./Subscribe.css"
import Snackbar from '@material-ui/core/Snackbar';
 class Subscribe extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userEmail : '',
      subscribeText: 'Subscribe',
      snakOpen : false,
      errorMessage : ''
    }
  }

  submitEmailSubs = async () => {
    if(this.state.userEmail != ''){
      fetch(`https://kefukbackend.herokuapp.com/subscribe`,{
        method: "POST",
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({ email: this.state.userEmail})
      }).then(res => {
        this.setState({ subscribeText : 'Sucess!',errorMessage : 'Thanks for subscribing.', snakOpen : true})
      }).catch(err => {
        this.setState({ subscribeText : 'Failed!',errorMessage : 'Check your connection..',snakOpen : true })
      })
    }else{
      this.setState({ errorMessage : 'Type your email...',snakOpen : true })

    }
    
  }

  render(){

    return (
      <div className='containerSTyle'>
        <div style={{ maxWidth: 1000, margin: "auto" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className='containerText'>{this.props.subscribeText}</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <input
                type="email"
                  className='containerEmailInput'
                  onChange={(e) => this.setState({ userEmail : e.target.value })}
                  placeholder={"Enter your email address"}
                ></input>
              </div>
              <div className="col-sm-12 col-md-2">
                <div>
                  <div onClick={() => this.submitEmailSubs()} className='subscribeBtnSus'>{this.state.subscribeText}</div>
                </div>
              </div>
            </div>
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
        autoHideDuration={2000}
        message={<span id="message-id">{this.state.errorMessage}</span>}
      />
       
        </div>
      </div>
    )
  }
}

Subscribe.propTypes = {
  subscribeText: PropTypes.string,
}

Subscribe.defaultProps = {
  subscribeText: ``,
}

export default Subscribe
