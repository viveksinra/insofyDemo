"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const BannerSlider: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
  

      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="seo-banner-slider"
      >
        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="hero-main-banner-content">
                    <span className="sub-title">Insurance, Simply better</span>
                    <h1>Partner With Us,
Grow Your Insurance Business Today</h1>
                    <p>
                      We work hand-in-hand with industry-leading brands 
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

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                           src="/images/banner-image/main-pic3.png"
                          alt="image"
                          width={639}
                          height={391}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            {/* <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="hero-main-banner-content">
                    <span className="sub-title">Insurance, Simply better</span>
                    <h1>Partner With Us,
Grow Your Insurance Business Today</h1>
                    <p>
                      We work hand-in-hand with industry-leading brands 
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

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/banner-image/main-pic2.png"
                          alt="image"
                          width={650}
                          height={420}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            {/* <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="seo-banner">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container mt-50">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="hero-main-banner-content">
                    <span className="sub-title">Insurance, Simply better</span>
                    <h1>Partner With Us,
Grow Your Insurance Business Today</h1>
                    <p>
                      We work hand-in-hand with industry-leading brands 
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

                    <div className="col-lg-6">
                      <div className="seo-banner-image animate-tb">
                        <Image
                          src="/images/banner-image/main-pic.png"
                          alt="image"
                          width={650}
                          height={417}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Images */}
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
            <div className="shape-img13">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
            <div className="shape-img14">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={234}
                height={355}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
