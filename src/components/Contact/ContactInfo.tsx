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
                <p>admin@insofy.com</p>
                <p>contactinfo@insofy.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-phone-call"></i>
                </div>
                <h3>Location Here</h3>
                <p>2750 Quadra Street Victoria Road, New York, Canada</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>Call Here</h3>
                <p>+123 456 7890</p>
                <p>+241 452 4526</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
