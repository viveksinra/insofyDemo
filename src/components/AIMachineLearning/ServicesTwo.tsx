"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Partner with us",
    description:
      "Fill up the simple one-time form and you are set to go with the best earnings & benefits on offer!",
    imageSrc: "/images/machine-learning/ml-service3.png",
    imageWidth: 148,
    imageHeight: 180,
  
  },
  {
    id: 2,
    title: "Expand your network & start earning",
    description:
      "We're here to simplify the process for you as a leading insurance broker!",
    imageSrc: "/images/machine-learning/ml-service4.png",
    imageWidth: 200,
    imageHeight: 180,

  },
  {
    id: 3,
    title: "Earn good commission",
    description:
      "Make more money per insurance policy! Too good to be true? Speak to our experts to know how!",
    imageSrc: "/images/machine-learning/ml-service5.png",
    imageWidth: 200,
    imageHeight: 180,
  
  },
];

const ServicesTwo: React.FC = () => {
  return (
    <>
      <div className="ml-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do aliqua.
            </p> */}
          </div>

          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6" style={{ display: 'flex' }}>
                <div className="ml-service" style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '400px', justifyContent: 'space-between', padding: '20px', boxSizing: 'border-box', backgroundColor: '#f9f9f9', borderRadius:"50px" }}>
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
                      {service.title}
                    </h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link href="/services" className="default-btn" style={{ width: '20%' }}>
              Become A POSP Partner <span></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesTwo;
