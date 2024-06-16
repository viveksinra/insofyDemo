"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    text: "Working as an insurance agent with Insofy has been an absolute game-changer for my business. The seamless and efficient processes have allowed me to focus more on serving my clients, resulting in increased satisfaction and retention rates.",
    name: "Vivek Singh",
    role: "POS Certified Partner",
    image: "/images/client-image/client2.jpg",
  },
  {
    text: "Insofy's insurance solutions have revolutionized the way I conduct business. The intuitive platform and prompt support have made my job significantly easier, allowing me to focus on providing the best service to my clients.",
    name: "Rajat Jha",
    role: "POS Certified Partner",
    image: "/images/client-image/client3.jpg",
  },
  {
    text: "As an insurance agent, I can confidently say that partnering with Insofy has been one of the best decisions I've made for my business. Their cutting-edge technology and responsive support team have elevated my services to new heights.",
    name: "Soumyadipta Majum",
    role: "POS Certified Partner",
    image: "/images/client-image/client4.jpg",
  },
  {
    text: "Insofy's commitment to innovation and excellence is truly commendable. As an insurance agent, I've experienced firsthand the positive impact their solutions have had on my business operations and client satisfaction.",
    name: "Mayank Sinha",
    role: "POS Certified Partner",
    image: "/images/client-image/client5.jpg",
  },
  {
    text: "I've been in the insurance industry for years, and Insofy stands out as a beacon of excellence. Their dedication to providing top-notch solutions and unparalleled support makes them a trusted partner for any insurance professional.",
    name: "Akshun Akul",
    role: "POS Certified Partner",
    image: "/images/client-image/client4.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-100 bg-color" style={{ marginTop: "-10px" }}>
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>Our Partners Speak For Us</h2>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="single-feedback-item">
                <p>{testimonial.text}</p>
                <div className="client-info">
                  <Image
                    src={testimonial.image}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
