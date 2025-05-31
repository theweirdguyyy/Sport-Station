import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <React.Fragment>
        <div className="colorTwo sec">
        <br/><br/><br/>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div>
                        <MdSecurity className="icon" />
                        <h2>Contactless Shipping</h2>
                    </div>
                </div>
                <div className="col-sm">
                    <div>
                        <TbTruckDelivery className="icon" />
                        <h2>Fast and Free Delivery</h2>
                    </div>
                </div>
                <div className="col-sm">
                    <div>
                        <GiReceiveMoney className="icon" />
                        <h2>Cash On Delivery(COD)</h2>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/>
        </div>
    </React.Fragment>
  );
};


export default Services;