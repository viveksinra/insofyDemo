"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <>
      <div className="hero-banner banner-bg2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-main-banner-content">
                    <span className="sub-title">Insurance, Simply better</span>
                    <h1>Partner With Us,
Grow Your Insurance Business Today</h1>
                    <p>
                      We work hand-in-hand with industry-leading brands to help
                      redefine the possibilities and potential of digital
                      engagements.
                    </p>

                    <form>
                      <input
                        type="mobile"
                        className="input-newsletter"
                        placeholder="Enter your mobile number"
                        name="MOBILE"
                      />
                      <button type="submit">Sign Up</button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hero-main-banner-image">
                    <Image
                      src="/images/banner-image/main-pic.png"
                      alt="man"
                      width={640}
                      height={600}
                      data-aos="fade-down"
                      data-aos-duration="800"
                      data-aos-delay="30"
                    />


                    {/* Main Images */}
                    <Image
                      src="/images/banner-image/main-pic.png"
                      alt="main-pic"
                      width={580}
                      height={560}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="450"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={289}
            height={274}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={202}
            height={202}
          />
        </div>
        <div className="shape-img7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={100}
            height={93}
          />
        </div>
        <div className="shape-img8">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={74}
            height={64}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
