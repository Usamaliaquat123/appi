import PropTypes from "prop-types"
import React from "react"
// import Img from "gatsby-image"
// import "bootstrap/dist/css/bootstrap.css"
import  "./Subscribe.css"
const Subscribe = ({ subscribeText }) => {
  return (
    <div className='containerSTyle'>
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className='containerText'>{subscribeText}</p>
            </div>
            <div className="col-sm-12 col-md-4">
              <input
                className='containerEmailInput'
                placeholder={"Enter your email address"}
              ></input>
            </div>
            <div className="col-sm-12 col-md-2">
              <div>
                <div className='subscribeBtnSus'>Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Subscribe.propTypes = {
  subscribeText: PropTypes.string,
}

Subscribe.defaultProps = {
  subscribeText: ``,
}

export default Subscribe
