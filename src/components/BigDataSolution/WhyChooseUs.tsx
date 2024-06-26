"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="bd-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="bd-choose-content">
                <span className="sub-title">WHY CHOOSE INSOFY</span>
                <h3>
                  Do What Matters <span>And We'll</span> Handle The Back Office
                  Routine
                </h3>
                <p>
                  Empowering insurance professionals with innovative solutions to enhance customer experiences and drive business growth. We collaborate with top-tier companies to transform the future of insurance through digital innovation and engagement.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check"></i> Demand Prediction
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Lead Generation
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Product Line
                        Optimization
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul className="list">
                      <li>
                        <i className="fa-solid fa-check"></i> Preventive
                        Maintenance
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Logistics
                        Optimization
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Warehouse
                        Optimization
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="choose-btn">
                  <Link href="/contact" className="default-btn">
                    Sign Up <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="bd-choose-image">
                <Image
                  src="/images/big-data-home/choose.png"
                  alt="image"
                  width={1128}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
