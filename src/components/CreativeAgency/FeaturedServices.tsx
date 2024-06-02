"use client";

import React from "react";
import Link from "next/link";

const FeaturedServices: React.FC = () => {
  return (
    <>
      <div className="featured-services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>Advantages with Insofy</h2>
            <p>
              Experience the best in insurance services with timely payouts, a fully digital process, and dedicated support.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>

                <h3>Timely Payouts</h3>
                <p>
                  Say goodbye to long waits for payments on policy issuance! With us, get timely payouts.
                </p>

                <Link href="/start-earning-now" className="default-btn">
                  Start Earning Now <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon color-facd60">
                  <i className="flaticon-mail"></i>
                </div>

                <h3>Fully Digital Process</h3>
                <p>
                  No middlemen, no hidden charges - what you deserve is what you get! View & track your payments with your unique ID!
                </p>

                <Link href="/sign-up" className="default-btn">
                  Sign Up <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon color-1ac0c6">
                  <i className="flaticon-research"></i>
                </div>

                <h3>Dedicated Support</h3>
                <p>
                  Stuck somewhere? No worries! Our dedicated support team is there to help you - wherever, whenever!
                </p>

                <Link href="/register-with-us" className="default-btn">
                  Register With Us <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
