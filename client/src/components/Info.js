import React from 'react'
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Info = () => {
  return (
    <>
        <div className="colorThree sec">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Ready to get started?</h2>
              <div>
                {/* <Button className="btn colorTwo"><NavLink to="/contacts" className='lnk'> <h5>Get Started</h5> </NavLink></Button> */}
                <h2>Talk to us today</h2>
              </div>
            </div>
            <div className="col">
              <h2>Sport Station</h2><h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h5>
            </div>
            <div className="col">
              <h2>Call Us</h2>
              <h5>+8801755945867</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info