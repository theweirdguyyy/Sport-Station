import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="colorThree">
          <hr/>
        <div className="container">
          <div className="row">
            <p className="col"> {new Date().getFullYear()}@SportStation.</p>
            <p className="col"> &copy;All Rights Reserved</p>
            <p className="col">PRIVACY POLICY</p>
            <p className="col">TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>

    </React.Fragment>
  );
};


export default Footer;