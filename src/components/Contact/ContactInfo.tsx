"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <h3>Email Here</h3>
                <p>asnitcorporate@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-phone-call"></i>
                </div>
                <h3>Registered Office Address</h3>
                <p>H.NO-21, Sec-4/43, S/F C Block, Old Mahabir Nagar, New Delhi-110018</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>Contact Here</h3>
                <p>Atul Bisht: +91 9711043005</p>
                <p>Dinkar Singh: +91 9284202612</p>
                <p>Ramit Pundir: +91 9756777905</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
