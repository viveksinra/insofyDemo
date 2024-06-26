"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-wrap-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-line-text-with-white-color">
            <span className="sub-title">LATEST NEWS</span>
            <h2>
              Explore, Learn And Stay <span>Up To Date</span> With The Latest
              News
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="tag">
                  <span>LATEST NEWS</span>
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="bx bxs-calendar"></i> 17th January
                  </li>
                  <li>
                    <i className="bx bx-message-dots"></i> 0 comment
                  </li>
                </ul>
                <h3>
                  <Link href="/blog/details">
                    The Launch Of A Revamped User Referral Program
                  </Link>
                </h3>
                <p>
                  Empowering insurance professionals with innovative solutions to enhance customer experiences and drive business growth. We work.
                </p>
                <div className="info">
                  <Image
                    src="/images/cryptocurrency-home/user1.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Thomas Adison</h3>
                  <span>Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="tag">
                  <span>LATEST NEWS</span>
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="bx bxs-calendar"></i> 17th January
                  </li>
                  <li>
                    <i className="bx bx-message-dots"></i> 0 comment
                  </li>
                </ul>
                <h3>
                  <Link href="/blog/details">
                    Making Peace With The Feast Or Famine Of Freelancing
                  </Link>
                </h3>
                <p>
                  Empowering insurance professionals with innovative solutions to enhance customer experiences and drive business growth. We work.
                </p>
                <div className="info">
                  <Image
                    src="/images/cryptocurrency-home/user2.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>James Anderson</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-card">
                <div className="tag">
                  <span>LATEST NEWS</span>
                </div>
                <ul className="post-meta">
                  <li>
                    <i className="bx bxs-calendar"></i> 17th January
                  </li>
                  <li>
                    <i className="bx bx-message-dots"></i> 0 comment
                  </li>
                </ul>
                <h3>
                  <Link href="/blog/details">
                    Here Are The 5 Most Telling Signs Of Micromanagement
                  </Link>
                </h3>
                <p>
                  Empowering insurance professionals with innovative solutions to enhance customer experiences and drive business growth. We work.
                </p>
                <div className="info">
                  <Image
                    src="/images/cryptocurrency-home/user3.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Sarah Taylor</h3>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
