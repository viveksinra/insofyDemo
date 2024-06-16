"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Timely Payouts",
    description:
      "Say goodbye to long waits for payments on policy issuance! With us, get TIMELY PAYOUT",
    imageSrc: "/images/services/timely.png",
    imageWidth: 200,
    imageHeight: 180,
    link: "/services/details",
    buttonTitle: "Start Earning Now"
  },
  {
    id: 2,
    title: "Fully Digital Process",
    description:
      "No middlemen, no hidden charges - what you deserve is what you get! View & track your payments with your unique ID!",
    imageSrc: "/images/services/fully_digital.png",
    imageWidth: 200,
    imageHeight: 180,
    link: "/services/details",
    buttonTitle: "Sign Up"
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "Stuck somewhere? No worries! Our dedicated support team is there to help you-wherever, whenever!",
    imageSrc: "/images/services/support.png",
    imageWidth: 200,
    imageHeight: 180,
    link: "/services/details",
    buttonTitle: "Register With Us"
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="ml-services-area bg-f2f2f7 pt-100 pb-70">
        <div className="container">
          <div className="section-title with-line-text-with-white-color">
          <span className="sub-title">Our Services</span>

            <h2>
            Advantages with <span>Insofy</span> POSP
            </h2>
          </div>

          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
                <div className="ml-service" style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '400px', justifyContent: 'space-between', padding: '20px', boxSizing: 'border-box' }}>
                  <div>
                    <div className="image">
                      <Image
                        src={service.imageSrc}
                        alt="image"
                        width={service.imageWidth}
                        height={service.imageHeight}
                      />
                    </div>
                    <h3 style={{ marginTop: '20px' }}>
                      <Link href={service.link}>{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                  </div>
                  <Link href={service.link} className="default-btn" style={{ alignSelf: 'center', marginTop: '20px' }}>
                    {service.buttonTitle} <span></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
