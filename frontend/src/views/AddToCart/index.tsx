import React from "react";
import "./addtocart.scss";
import { RiSecurePaymentFill } from "react-icons/ri";

const AddToCartPageView = () => {
  return (
    <div className="addtocartpage">
      <div className="row addtocartheader">
        <div className="path col-10">
          <b>CART-----ADDRESS-----PAYMENT</b>
        </div>
        <div className="secure col-2 ">
          <RiSecurePaymentFill size={20} />
          <b>100% SECURE</b>
        </div>
      </div>
      <div className="row">
        <div className="col-8">sad</div>
        <div className="col-4">sadsa</div>
      </div>
    </div>
  );
};

export default AddToCartPageView;
