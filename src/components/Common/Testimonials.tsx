"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-100 bg-color">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>Some Lovely Feedback From Our Clients</h2>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1550: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="feedback-slides"
        >
          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                "Working as an insurance agent with Insofy has been an absolute game-changer for my business. The seamless and efficient processes have allowed me to focus more on serving my clients, resulting in increased satisfaction and retention rates."
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client2.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Alice Johnson</h3>
                <span>Insurance Agent</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                "Insofy's insurance solutions have revolutionized the way I conduct business. The intuitive platform and prompt support have made my job significantly easier, allowing me to focus on providing the best service to my clients."
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client3.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Michael Adams</h3>
                <span>Insurance Agent</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                "As an insurance agent, I can confidently say that partnering with Insofy has been one of the best decisions I've made for my business. Their cutting-edge technology and responsive support team have elevated my services to new heights."
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client4.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Emily Thompson</h3>
                <span>Insurance Agent</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                "Insofy's commitment to innovation and excellence is truly commendable. As an insurance agent, I've experienced firsthand the positive impact their solutions have had on my business operations and client satisfaction."
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client5.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>John Doe</h3>
                <span>Insurance Agent</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-feedback-item">
              <p>
                "I've been in the insurance industry for years, and Insofy stands out as a beacon of excellence. Their dedication to providing top-notch solutions and unparalleled support makes them a trusted partner for any insurance professional."
              </p>
              <div className="client-info">
                <Image
                  src="/images/client-image/client4.jpg"
                  alt="image"
                  width={150}
                  height={150}
                />
                <h3>Samantha Smith</h3>
                <span>Insurance Agent</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
