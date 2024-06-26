"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="cs-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-choose-content">
                <span className="sub-title">WHY CHOOSE INSOFY</span>
                <h3>
                  Reduce Attacker <span>Time With</span> Early Detection &
                  Derailment Of In-network Threats
                </h3>
                <p>
                  Empowering insurance professionals with innovative solutions to enhance customer experiences and drive business growth. We collaborate with top-tier companies to transform the future of insurance through digital innovation and engagement.
                </p>

                <ul className="list">
                  <li>
                    <i className="fa-solid fa-check"></i> Premium Services And
                    Beyond Your Expectation
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> World Class Cyber
                    Security Tech
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Quick Alert With Auto
                    Action & Low Maintenance
                  </li>
                </ul>
                <div className="choose-btn">
                  <Link href="/contact" className="default-btn">
                    Get Started <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cs-choose-image">
                <Image
                  src="/images/cyber-security-home/choose.png"
                  alt="image"
                  width={1070}
                  height={670}
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
