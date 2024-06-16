"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const partnerImages = [
"/images/partner-image/partner-img1.png",
"/images/partner-image/partner-img2.png",
"/images/partner-image/partner-img6.png",
"/images/partner-image/partner-img7.png",
"/images/partner-image/partner-img8.png",
"/images/partner-image/partner-img9.png",
"/images/partner-image/partner-img10.png",
];

const PartnerSlider: React.FC = () => {
return (
<>
<div className="partner-area ptb-10 bg-F4F7FC" style={{backgroundColor:"#F4F7FC"}}>
<div className="section-title">
<span className="sub-title">OUR INSURANCE PARTNERS</span>
</div>
<div className="container">
<Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            {partnerImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="single-partner-item">
                  <a href="#" target="_blank">
                    <Image
                      src={image}
                      alt="image"
                      width={200}
                      height={60}
                    />
                    <Image
                      src={image}
                      alt="image"
                      width={200}
                      height={60}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
</div>
</div>
<style jsx>{ `.partner-area { background-color: #f9f9f9; } .section-title { text-align: center; margin-bottom: 20px; } .sub-title { display: inline-block; padding-top: 20px; margin-bottom: 10px; } .container { padding: 0 15px; } `}</style>
</>
);
};

export default PartnerSlider;